using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles.IO.Contracts
{
    interface IWriter
    {
        public void Write(string text);

        public void WriteLine(string text);
    }
}
