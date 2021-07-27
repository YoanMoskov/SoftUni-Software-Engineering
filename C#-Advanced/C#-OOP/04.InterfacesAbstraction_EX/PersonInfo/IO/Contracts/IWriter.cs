using System;
using System.Collections.Generic;
using System.Text;

namespace PersonInfo.IO.Contracts
{
    interface IWriter
    {
        void Write(string text);
        void WriteLine(string text);
    }
}
