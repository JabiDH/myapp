using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webapiangular2.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
        public int Quantity { get; set; }
    }
}