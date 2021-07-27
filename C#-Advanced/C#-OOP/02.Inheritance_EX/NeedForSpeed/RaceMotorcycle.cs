using System;
using System.Collections.Generic;
using System.Text;

namespace NeedForSpeed
{
    public class RaceMotorcycle : Motorcycle
    {
        private const double DefaulFuelConsumption = 8;
        public override double FuelConsumption => DefaulFuelConsumption;
        public RaceMotorcycle(int horsePower, double fuel)
            : base(horsePower, fuel)
        {

        }
    }
}
