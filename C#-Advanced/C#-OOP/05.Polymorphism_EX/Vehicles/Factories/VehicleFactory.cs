using Vehicles.Models;

namespace Vehicles.Factories
{
    class VehicleFactory
    {
        private Vehicle vehicle;

        public Vehicle CreateVehicle(string type, double fuelQuantity, double fuelConsumption, double tankCapacity)
        {
            Vehicle vehicle = null;
            if (type == "Car")
            {
                vehicle = new Car(fuelQuantity, fuelConsumption, tankCapacity);
            }
            else if (type == "Truck")
            {
                vehicle = new Truck(fuelQuantity, fuelConsumption, tankCapacity);
            }
            else if (type == "Bus")
            {
                vehicle = new Bus(fuelQuantity, fuelConsumption, tankCapacity);
            }

            return vehicle;
        }
    }
}
