using System;
using Telephony.Core;
using Telephony.Interfaces;
using Telephony.IO;
using Telephony.IO.Contracts;

namespace Telephony
{
    class Program
    {
        static void Main(string[] args)
        {
            IReader reader = new ConsoleReader();
            IWriter writer = new ConsoleWriter();

            IEngine engine = new Engine(reader, writer);
            engine.Run();
        }
    }
}
