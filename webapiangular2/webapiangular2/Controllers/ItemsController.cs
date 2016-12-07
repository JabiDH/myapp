using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapiangular2.Models;

namespace webapiangular2.Controllers
{
    public class ItemsController : ApiController
    {
        public static List<Item> repository = new List<Item>();
        
        public ItemsController()
        {
            if (repository.Count <= 0)
            {
                for (int i = 1; i <= 5; i++)
                {
                    repository.Add(new Item()
                    {
                        Name = "Item_"+i,
                        Price = 19.99 + i
                    });
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
