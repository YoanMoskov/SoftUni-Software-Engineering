using System;
using System.Collections.Generic;
using System.Text;

namespace Restaurant
{
    class Coffee : HotBeverage
    {
        private double caffeine;
        private const double coffeeMilliliters = 50;
        private const decimal coffeePrice = 3.50m;

        public double Caffeine
        {
            get { return caffeine; }
            set { caffeine = value; }
        }
        public Coffee(string name, double caffeine)
            : base(name, coffeePrice, coffeeMilliliters)
        {
            this.Caffeine = caffeine;
        }

    }
}
