using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace Parking
{
    public class Parking
    {
        private List<Car> data;
        private string type;
        private int capacity;

        public int Capacity
        {
            get { return capacity; }
            set { capacity = value; }
        }

        public string Type
        {
            get { return type; }
            set { type = value; }
        }
        public List<Car> Data
        {
            get { return data; }
            set { data = value; }
        }
        public Parking(string type, int capacity)
        {
            data = new List<Car>();
            this.type = type;
            this.capacity = capacity;
        }
        public int Count
        {
            get
            {
                return this.data.Count;
            }
        }
        public void Add(Car car)
        {
            if (data.Count + 1 <= capacity)
            {
                data.Add(car);
            }
        }
        public bool Remove(string manufacturer, string model)
        {
            bool contains = false;
            Car temp = new Car("manufacturer", "model", 0000);
            foreach (var car in data)
            {
                if (car.Manufacturer == manufacturer)
                {
                    if (car.Model == model)
                    {
                        temp = car;
                        contains = true;
                    }
                }
            }
            data.Remove(temp);
            return contains;
        }
        public Car GetLatestCar()
        {
            if (data.Count != 0)
            {
                Car car = data.OrderByDescending(x => x.Year).First();
                return car;
            }
            else
            {
                return null;
            }
        }
        public Car GetCar(string manufacturer, string model)
        {
            Car temp = new Car("manufacturer", "model", 0000);
            foreach (var car in data)
            {
                if (car.Manufacturer == manufacturer)
                {
                    if (car.Model == model)
                    {
                        temp = car;
                    }
                }
            }
            return temp;
        }
        public string GetStatistics()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"The cars are parked in {type}:");
            foreach (var car in data)
            {
                sb.AppendLine(car.ToString());
            }
            return sb.ToString().Trim();
        }

    }
}
