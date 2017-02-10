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
    public class ReviewsController : ApiController
    {
        public static List<Review> Repository = new List<Review>();
        private string itemsFolder = HttpContext.Current.Server.MapPath("~/items");

        public ReviewsController()
        {
            var nbrOfItems = System.IO.Directory.GetFiles(itemsFolder).Length;
            if (Repository.Count <= 0)
            {
                var random = new Random();
                for (int i = 1; i <= nbrOfItems; i++)
                {
                    var n = random.Next(50, 100);
                    for (int j = 1; j <= n; j++)
                    {
                        var review = new Review() {
                            ItemId = i,
                            Creater = "TEST",
                            Comment = "COMMENT",
                            Rate = random.Next(1, 5),
                            DateCreated = DateTime.Now,
                            Id = j,                            
                        };
                        Repository.Add(review);
                    }
                }
            }
        }
        // GET api/<controller>
        public IEnumerable<Review> Get()
        {
            return Repository.ToList();
        }

        // GET api/<controller>/id
        public IEnumerable<Review> Get(int id)
        {
            return Repository.Where(review => review.ItemId == id);
        }

        // POST api/<controller>
        public Review Post(Review review)
        {
            if (review != null)
            {
                Repository.Add(review);                
            }
            return review;
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}