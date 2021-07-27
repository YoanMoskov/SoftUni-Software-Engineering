using System;
using System.Collections.Generic;
using System.Text;
using Vehicles.IO.Contracts;

namespace Vehicles.IO
{
    class ConsoleReader : IReader
    {
        public string ReadLine()
        {
            return Console.ReadLine();
        }
    }
}
