using System;
using Vehicles.Core;
using Vehicles.IO;
using Vehicles.IO.Contracts;

namespace Vehicles
{
    public class Program
    {
        static void Main(string[] args)
        {
            IReader reader = new ConsoleReader();
            IWriter writer = new ConsoleWriter();
            Engine engine = new Engine(reader, writer);
            engine.Run();
        }
    }
}
