using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OnlineShop.Models.Products.Components;
using OnlineShop.Models.Products.Peripherals;

namespace OnlineShop.Models.Products.Computers
{
    class DesktopComputer : Computer, IProduct
    {
        private const double DESKTOP_overallPerformance = 15;
        public DesktopComputer(int id, string manufacturer, string model, decimal price) 
            : base(id, manufacturer, model, price, DESKTOP_overallPerformance)
        {

        }
    }
}
