using System;
using System.Collections.Generic;
using System.Text;

namespace PersonInfo.Contracts
{
    interface IBuyer
    {
        public int Food { get; }
        void BuyFood();
    }
}
