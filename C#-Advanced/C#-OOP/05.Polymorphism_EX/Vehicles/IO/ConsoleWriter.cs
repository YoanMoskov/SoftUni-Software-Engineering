using System;
using System.Collections.Generic;
using System.Text;
using Vehicles.IO.Contracts;

namespace Vehicles.IO
{
    class ConsoleWriter : IWriter
    {
        public void Write(string text)
        {
            Console.Write(text);
        }

        public void WriteLine(string text)
        {
            Console.WriteLine(text);
        }
    }
}
