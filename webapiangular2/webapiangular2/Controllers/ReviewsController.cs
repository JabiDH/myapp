using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapiangular2.Models;

namespace webapiangular2.Controllers
{
    public class ReviewsController : ApiController
    {
        public List<Review> Repository = new List<Review>();
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
        public void Post(Review review)
        {
            if (review != null)
            {
                Repository.Add(review);
            }
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