using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles.Models
{
    class Bus : Vehicle
    {
        public Bus(double fuelQuantity, double fuelConsumption, double tankCapacity) 
            : base(fuelQuantity, fuelConsumption, tankCapacity)
        {

        }

        public override void Drive(double kilometers)//?
        {
            this.FuelConsumption += 1.4;
            try
            {
                base.Drive(kilometers);
            }
            catch (ArgumentException ae)
            {
                Console.WriteLine(ae.Message);
            }
            finally
            {
                this.FuelConsumption -= 1.4;
            }
        }

        public void DriveEmpty(double kilometers)
        {
            double fuelLeft = this.FuelQuantity - this.FuelConsumption * kilometers;
            if (fuelLeft >= 0)
            {
                this.FuelQuantity = fuelLeft;
                Console.WriteLine($"{this.GetType().Name} travelled {kilometers} km");
            }
            else
                throw new ArgumentException(String.Format(ExceptionMessages.ExceptionMessages.NOT_ENOUGH_FUEL,
                    this.GetType().Name));
        }
    }
}
