using PersonInfo.Core;
using PersonInfo.IO;
using PersonInfo.IO.Contracts;
using System;

namespace PersonInfo
{
    public class StartUp
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
