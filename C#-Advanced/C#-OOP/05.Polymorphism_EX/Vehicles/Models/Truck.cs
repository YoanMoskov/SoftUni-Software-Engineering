using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles.Models
{
    class Truck : Vehicle
    {
        public override double FuelConsumption => base.FuelConsumption + 1.6;

        public Truck(double fuelQuantity, double fuelConsumption, double tankCapacity) 
            : base(fuelQuantity, fuelConsumption, tankCapacity)
        {
        }

        public override void Refuel(double liters)
        {
            if (liters <= 0)
            {
                throw new ArgumentException(ExceptionMessages.ExceptionMessages.FUEL_CANNOT_EQUAL_NULL_OR_NEGATIVE);
            }
            else if (this.FuelQuantity + liters > this.TankCapacity)
            {
                string exc = liters.ToString();
                throw new ArgumentException(String.Format(ExceptionMessages.ExceptionMessages.FUEL_OVERLOAD, exc));
            }
            this.FuelQuantity += liters * 0.95;
        }
    }
}
