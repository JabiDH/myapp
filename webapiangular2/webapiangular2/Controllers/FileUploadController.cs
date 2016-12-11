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
            string serverUploadFolder = HttpContext.Current.Server.MapPath("~/upload");

            var streamProvider = new MultipartFormDataStreamProvider(serverUploadFolder);
            await Request.Content.ReadAsMultipartAsync(streamProvider);

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
