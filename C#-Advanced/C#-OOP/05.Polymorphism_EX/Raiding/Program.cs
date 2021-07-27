using System;
using Raiding.Core;
using Raiding.IO;
using Raiding.IO.Contracts;

namespace Raiding
{
    class Program
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
