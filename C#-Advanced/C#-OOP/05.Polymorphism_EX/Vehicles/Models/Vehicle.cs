using System;
using System.Collections.Generic;
using System.Text;
using Vehicles.Contracts;

namespace Vehicles.Models
{
    class Vehicle : IDrivable, IRefuelable
    {
        private double fuelQuantity;
        private double fuelConsumption;
        private double tankCapacity;

        public double FuelQuantity
        {
            get => this.fuelQuantity;
            protected set
            {
                this.fuelQuantity = value;
            }
        }

        public virtual double FuelConsumption
        {
            get => this.fuelConsumption;
            protected set
            {
                this.fuelConsumption = value;
            }
        }

        public double TankCapacity
        {
            get => this.tankCapacity;
            protected set
            {
                this.tankCapacity = value;
            }
        }

        public Vehicle(double fuelQuantity, double fuelConsumption, double tankCapacity)
        {
            this.FuelQuantity = fuelQuantity > tankCapacity ? 0 : fuelQuantity;
            this.FuelConsumption = fuelConsumption;
            this.TankCapacity = tankCapacity;
        }


        public virtual void Drive(double kilometers)
        {
            double fuelLeft = this.FuelQuantity - this.FuelConsumption * kilometers;
            if (fuelLeft >= 0)
            {
                fuelQuantity = fuelLeft;
                Console.WriteLine($"{this.GetType().Name} travelled {kilometers} km");
            }
            else
                throw new ArgumentException(String.Format(ExceptionMessages.ExceptionMessages.NOT_ENOUGH_FUEL,
                    this.GetType().Name));
        }

        public virtual void Refuel(double liters)
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
            this.FuelQuantity += liters;
        }

        public override string ToString()
        {
            return $"{this.GetType().Name}: {this.fuelQuantity:f2}";
        }
    }
}
