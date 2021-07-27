using System;
using System.Collections.Generic;
using System.Text;
using Telephony.IO.Contracts;

namespace Telephony.IO
{
    class ConsoleReader : IReader
    {
        public string ReadLine()
        {
            return Console.ReadLine();
        }
    }
}
