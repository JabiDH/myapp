using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using webapiangular2.Models;

namespace webapiangular2.Controllers
{
    public class FileUploadController : ApiController
    {
        // GET api/fileupload
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/fileupload/5
        public Task<HttpResponseMessage> Get(int id)
        {
            var response = new HttpResponseMessage();
            try
            {
                var folderPath = HttpContext.Current.Server.MapPath("~/items");
                var filePath = Directory.GetFiles(folderPath).SingleOrDefault(name => name.Equals(string.Format("{0}\\item{1}.jpg", folderPath,id)));
                var fileStream = System.IO.File.OpenRead(filePath);
                response.Content = new StreamContent(fileStream);
                //response.Content.Headers.ContentType = new MediaTypeHeaderValue("image/jpeg");
                //response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
            }
            catch { 
                
            }
            return Task.FromResult(response);
        }

        // POST api/fileupload
        //[ValidateMimeMultipartContentFilter]
        public async Task<FileResult> Post()
        {
            string serverUploadFolder = HttpContext.Current.Server.MapPath("~/items");
            int nextItem = Directory.GetFiles(serverUploadFolder).Length + 1;
            var streamProvider = new MultipartFormDataStreamProvider(serverUploadFolder);
            await Request.Content.ReadAsMultipartAsync(streamProvider).ContinueWith(t =>
            {
                string filePath = streamProvider.FileData.Select(entry => entry.LocalFileName).ElementAt(0);
                ContentDispositionHeaderValue contentDisposition = streamProvider.FileData.Select(entry => entry.Headers.ContentDisposition).ElementAt(0);

                var info = new FileInfo(contentDisposition.FileName.Replace("\"", ""));
                try
                {
                    var ext = Path.GetExtension(info.Name);
                    var name = Path.GetFileNameWithoutExtension(info.Name);
                    name = System.Text.RegularExpressions.Regex.Replace(name, @"\s", "%20");
                    name = "item" + nextItem + ext;
                    var fileStream = new FileStream((serverUploadFolder + "\\" + name), FileMode.CreateNew);
                    using (var stream =  new FileStream(filePath, FileMode.Open))
                    {
                        int data = 0;
                        while ((data = stream.ReadByte()) != -1)
                        {
                            fileStream.WriteByte((byte)data);
                        }
                        stream.Close();
                    }
                    fileStream.Close();
                    File.Delete(filePath);
                    return info;
                }
                catch (Exception)
                {
                    throw;
                }    
                

            });

            return new FileResult
            {
                FileNames = streamProvider.FileData.Select(entry => entry.LocalFileName),
                Names = streamProvider.FileData.Select(entry => entry.Headers.ContentDisposition.FileName),
                ContentTypes = streamProvider.FileData.Select(entry => entry.Headers.ContentType.MediaType),
                Description = streamProvider.FormData["description"],
                CreatedTimestamp = DateTime.UtcNow,
                UpdatedTimestamp = DateTime.UtcNow,
                DownloadLink = "TODO, will implement when file is persisited"
            };
        }

        // PUT api/fileupload/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/fileupload/5
        public void Delete(int id)
        {
        }
    }
}
