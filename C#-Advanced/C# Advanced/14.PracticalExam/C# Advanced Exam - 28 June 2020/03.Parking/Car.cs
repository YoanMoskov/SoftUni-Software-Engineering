using System;
using System.Collections.Generic;
using System.Text;

namespace Parking
{
    public class Car
    {
        private string manufacturer;
        private string model;
        private int year;

        public int Year
        {
            get { return year; }
            set { year = value; }
        }

        public string Model
        {
            get { return model; }
            set { model = value; }
        }

        public string Manufacturer
        {
            get { return manufacturer; }
            set { manufacturer = value; }
        }
        public Car(string manufacturer, string model, int year)
        {
            this.manufacturer = manufacturer;
            this.model = model;
            this.year = year;
        }
        public override string ToString()
        {
            return $"{manufacturer} {model} ({year})";
        }
    }
}
