using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OnlineShop.Models.Products.Components;
using OnlineShop.Models.Products.Peripherals;

namespace OnlineShop.Models.Products.Computers
{
    class Laptop : Computer, IProduct
    {
        private const double LAPTOP_overallPerformance = 10;
        public Laptop(int id, string manufacturer, string model, decimal price) 
            : base(id, manufacturer, model, price, LAPTOP_overallPerformance)
        {

        }
    }
}
