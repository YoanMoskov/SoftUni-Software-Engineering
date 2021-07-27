using PersonInfo.IO.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonInfo.IO
{
    class ConsoleReader : IReader
    {
        public string ReadLine()
        {
            return Console.ReadLine();
        }
    }
}
