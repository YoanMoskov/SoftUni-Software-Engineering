using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Telephony.Exceptions;
using Telephony.Interfaces;
using Telephony.IO.Contracts;
using Telephony.Models;

namespace Telephony.Core
{
    class Engine : IEngine
    {
        private IReader reader;
        private IWriter writer;
        private StationaryPhone stationaryPhone;
        private Smartphone smartphone;
        private Engine()
        {
            this.stationaryPhone = new StationaryPhone();
            this.smartphone = new Smartphone();
        }
        public Engine(IReader reader, IWriter writer)
            :this()
        {
            this.reader = reader;
            this.writer = writer;
        }
        public void Run()
        {
            List<string> phoneNumbers = reader
                .ReadLine()
                .Split(' ')
                .ToList();
            List<string> sites = reader
                .ReadLine()
                .Split(' ')
                .ToList();
            CallNumbers(phoneNumbers);
            BrowseSites(sites);
        }

        private void BrowseSites(List<string> sites)
        {
            foreach (var url in sites)
            {
                try
                {
                    writer.WriteLine(smartphone.Browse(url));
                }
                catch (InvalidUrlException iue)
                {
                    writer.WriteLine(iue.Message);
                }
            }
        }

        private void CallNumbers(List<string> phoneNumbers)
        {
            foreach (var number in phoneNumbers)
            {
                try
                {
                    if (number.Length == 7)
                    {
                        writer.WriteLine(stationaryPhone.Call(number));
                    }
                    else if (number.Length == 10)
                    {
                        writer.WriteLine(smartphone.Call(number));
                    }
                    else
                    {
                        throw new InvalidNumberException();
                    }
                }
                catch (InvalidNumberException ine)
                {
                    writer.WriteLine(ine.Message);
                }
            }
        }
    }
}
