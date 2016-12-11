using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapiangular2.Models;
namespace webapiangular2.Controllers
{
    public class OrdersController : ApiController
    {
        public static List<Order> repository = new List<Order>();

        public OrdersController()
        {

        }
        // GET api/order
        public IEnumerable<Order> Get()
        {
            return repository;
        }

        // GET api/order/5
        public Order Get(int id)
        {
            return repository.SingleOrDefault(order => order.Id == id);
        }

        public IEnumerable<Order> Get(string creater)
        {
            if (string.IsNullOrWhiteSpace(creater))
            {
                return null;
            }
            return repository.Where(order => order.Creater == creater);
        }

        // POST api/order
        public Order Post(Order order)
        {
            if (order == null)
            {
                return null;
            }
            repository.Add(order);
            return order;
        }

        // PUT api/order/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/order/5
        public void Delete(int id)
        {
        }
    }
}
