using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm.IO.Contracts
{
    interface IWriter
    {
        public void Write(string text);
        public void WriteLine(string text);
    }
}
