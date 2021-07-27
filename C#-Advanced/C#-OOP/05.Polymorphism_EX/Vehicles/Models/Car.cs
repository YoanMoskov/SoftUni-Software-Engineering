using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles.Models
{
    class Car : Vehicle
    {
        public override double FuelConsumption => base.FuelConsumption + 0.9;


        public Car(double fuelQuantity, double fuelConsumption, double tankCapacity) 
            : base(fuelQuantity, fuelConsumption, tankCapacity)
        {
        }
    }
}
