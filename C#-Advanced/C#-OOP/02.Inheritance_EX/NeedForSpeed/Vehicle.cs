using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;

namespace NeedForSpeed
{
    public class Vehicle
    {
        private int horsePower;
        private double fuel;
        private double fuelConsumption;
        private const double DefaultFuelConsumption = 1.25;

        public double Fuel
        {
            get { return fuel; }
            set { fuel = value; }
        }

        public int HorsePower
        {
            get { return horsePower; }
            set { horsePower = value; }
        }
        public Vehicle(int horsePower, double fuel)
        {
            this.HorsePower = horsePower;
            this.Fuel = fuel;
        }
        public virtual double FuelConsumption => DefaultFuelConsumption;
        public virtual void Drive(double kilometers)
        {
            this.Fuel = Fuel - FuelConsumption * kilometers;
        }
    }
}
