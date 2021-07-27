using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Raiding.IO.Contracts;
using Console = System.Console;

namespace Raiding.IO
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
