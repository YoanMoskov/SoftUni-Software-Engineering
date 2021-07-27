using System;
using System.Collections.Generic;
using System.Text;

namespace Cars.Interfaces
{
    interface ICar
    {
        public string Model { get; set; }
        public string Color { get; set; }

        abstract string Start();

        abstract string Stop();
    }
}
