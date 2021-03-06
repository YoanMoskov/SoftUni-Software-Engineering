using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Telephony.Exceptions;
using Telephony.Interfaces;

namespace Telephony.Models
{
    class Smartphone : ICallable, IBrowseable
    {
        public string Browse(string url)
        {
            if (url.Any(x => Char.IsDigit(x)))
            {
                throw new InvalidUrlException();
            }
            return $"Browsing: {url}!";
        }

        public string Call(string number)
        {
            if (!number.All(x => Char.IsDigit(x)))
            {
                throw new InvalidNumberException();
            }
            return $"Calling... {number}";
        }
    }
}
