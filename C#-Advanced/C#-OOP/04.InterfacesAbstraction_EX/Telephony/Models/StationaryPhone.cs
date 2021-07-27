using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Telephony.Exceptions;
using Telephony.Interfaces;

namespace Telephony.Models
{
    class StationaryPhone : ICallable
    {
        public string Call(string number)
        {
            if (!number.All(x => Char.IsDigit(x)))
            {
                throw new InvalidNumberException();
            }

            return $"Dialing... {number}";
        }
    }
}
