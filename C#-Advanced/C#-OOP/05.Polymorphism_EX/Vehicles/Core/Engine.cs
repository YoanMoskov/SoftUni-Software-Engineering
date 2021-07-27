using System;
using System.Collections.Generic;
using System.Linq;
using Vehicles.Core.Contracts;
using Vehicles.Factories;
using Vehicles.IO.Contracts;
using Vehicles.Models;

namespace Vehicles.Core
{
    class Engine : IEngine
    {
        private IReader reader;
        private IWriter writer;
        private Car car;
        private Truck truck;
        private Bus bus;
        private VehicleFactory vehicleFactory;

        public Engine()
        {
            vehicleFactory = new VehicleFactory();
        }
        public Engine(IReader reader, IWriter writer)
        :this()
        {
            this.reader = reader;
            this.writer = writer;
        }
        public void Run()
        {
            ProduceVehicle();
            ProduceVehicle();
            ProduceVehicle();

            int n = Int32.Parse(reader.ReadLine());
            for (int i = 0; i < n; i++)
            {
                List<string> cmndArgs = reader
                    .ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .ToList();
                string activity = cmndArgs[0];
                string typeOfVehicle = cmndArgs[1];
                double value = Double.Parse(cmndArgs[2]);
                try
                {
                    Drive(activity, typeOfVehicle, value);
                    Refuel(activity, typeOfVehicle, value);
                }
                catch (ArgumentException ae)
                {
                    Console.WriteLine(ae.Message);
                }
            }

            Console.WriteLine(car);
            Console.WriteLine(truck);
            Console.WriteLine(bus);
            
        }

        private void Refuel(string activity, string typeOfVehicle, double value)
        {
            if (activity == "Refuel")
            {
                if (typeOfVehicle == "Car")
                {
                    car.Refuel(value);
                }
                else if (typeOfVehicle == "Truck")
                {
                    truck.Refuel(value);
                }
                else if (typeOfVehicle == "Bus")
                {
                    bus.Refuel(value);
                }
            }
        }

        private void Drive(string activity, string typeOfVehicle, double value)
        {
            if (activity == "Drive")
            {
                if (typeOfVehicle == "Car")
                {
                    car.Drive(value);
                }
                else if (typeOfVehicle == "Truck")
                {
                    truck.Drive(value);
                }
                else if (typeOfVehicle == "Bus")
                {
                    bus.Drive(value);
                }
            }
            else if (activity == "DriveEmpty")
            {
                if (typeOfVehicle == "Bus")
                {
                    bus.DriveEmpty(value);
                }
            }
        }

        private void ProduceVehicle()
        {
            List<string> vehicleDataList = reader
                .ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .ToList();
            string type = vehicleDataList[0];
            double fuelQuantity = Double.Parse(vehicleDataList[1]);
            double fuelConsumption = Double.Parse(vehicleDataList[2]);
            double tankCapacity = Double.Parse(vehicleDataList[3]);

            if (type == "Car")
            {
                car = vehicleFactory.CreateVehicle(type, fuelQuantity, fuelConsumption, tankCapacity) as Car;
            }
            else if (type == "Truck")
            {
                truck = vehicleFactory.CreateVehicle(type, fuelQuantity, fuelConsumption, tankCapacity) as Truck;
            }
            else if (type == "Bus")
            {
                bus = vehicleFactory.CreateVehicle(type, fuelQuantity, fuelConsumption, tankCapacity) as Bus;
            }
        }
    }
}
