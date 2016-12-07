using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webapiangular2.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string Creater { get; set; }
        public List<Item> Items { get; set; }
    }
}