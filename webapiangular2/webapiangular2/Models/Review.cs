using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webapiangular2.Models
{
    public class Review
    {
        public int Id { get; set; }
        public int ItemId { get; set; }
        public string Creater { get; set; }
        public DateTime DateCreated { get; set; }
        public int Rate { get; set; }
        public string Comment { get; set; }
    }
}