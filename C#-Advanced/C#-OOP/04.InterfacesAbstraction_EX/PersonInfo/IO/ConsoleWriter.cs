using PersonInfo.IO.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonInfo.IO
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
