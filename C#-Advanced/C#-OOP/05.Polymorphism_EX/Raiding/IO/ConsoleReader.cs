using System;
using System.Collections.Generic;
using System.Text;
using Raiding.IO.Contracts;

namespace Raiding.IO
{
    class ConsoleReader : IReader
    {
        public string ReadLine()
        {
            return Console.ReadLine();
        }
    }
}
