using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using webapiangular2.Models;

namespace webapiangular2.Controllers
{
    public class ItemsController : ApiController
    {
        public static List<Item> repository = new List<Item>();
        private string itemsFolder = HttpContext.Current.Server.MapPath("~/items");

        public ItemsController()
        {
            if (repository.Count <= 0 || System.IO.Directory.GetFiles(itemsFolder).Length != repository.Count)
            {
                var images = System.IO.Directory.GetFiles(itemsFolder);
                var random = new Random();
                repository = new List<Item>();
                //var reviews = new List<Review>();
                for (int i = 1; i <= images.Length; i++)
                {
                    //for (int j = 0; j < 5; j++)
                    //{
                    //    var review = new Review() {
                    //        Rate = random.Next(5),
                    //        Creater = "TEST",
                    //        DateCreated = DateTime.Now,
                    //        Comment = "Some Comment",
                    //        ItemId = i,
                    //    };
                    //    reviews.Add(review);
                    //}
                    repository.Add(new Item()
                    {
                        Id = i,
                        Name = "Item_" + i,
                        Price = random.Next(30),
                        Reviews = new List<Review>(),
                        Image = string.Format("{0}/{1}","http://localhost:62412/api/fileupload", i)
                    });
                    //reviews = new List<Review>();
                }
                
            }
        }

        // GET api/items
        public IHttpActionResult Get()
        {
            return Ok(repository.ToList());
        }

        // GET api/items/5
        public Item Get(int id)
        {
            return repository.SingleOrDefault(item => item.Id == id);
        }

        // POST api/items
        public void Post(Item item)
        {
            if (item == null)
            {
                return;
            }
            repository.Add(item);
        }

        // PUT api/items/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/items/5
        public void Delete(int id)
        {
        }
    }
}
