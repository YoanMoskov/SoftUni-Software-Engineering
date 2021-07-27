using System;
using System.Collections.Generic;
using System.Text;

namespace NeedForSpeed
{
    public class SportCar : Car
    {
        private const double DefaulFuelConsumption = 10;
        public override double FuelConsumption => DefaulFuelConsumption;
        public SportCar(int horsePower, double fuel)
            : base(horsePower, fuel)
        {

        }
    }
}
