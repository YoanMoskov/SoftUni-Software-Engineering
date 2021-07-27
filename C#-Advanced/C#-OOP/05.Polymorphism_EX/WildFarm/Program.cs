using System;
using WildFarm.Core;
using WildFarm.IO;
using WildFarm.IO.Contracts;

namespace WildFarm
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
