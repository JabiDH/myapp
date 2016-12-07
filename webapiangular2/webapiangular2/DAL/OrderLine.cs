using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using webapiangular2.Models;

namespace webapiangular2.DAL
{
    public class OrderLine
    {
        public Order CreateAnOrder(string creater, List<Item> items)
        {
            if (items == null || items.Count <= 0)
            {
                return null;
            }           
            var order = new Order()
            {
                Creater = creater,
                Items = items,
                Id = GetOrderNumber(),
            };
            return order;
        }

        private int GetOrderNumber()
        {
            var random = new Random(9999);
            return random.Next();
        }
    }
}