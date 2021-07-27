using System;
using System.Collections.Generic;
using System.Text;
using WildFarm.IO.Contracts;

namespace WildFarm.IO
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
