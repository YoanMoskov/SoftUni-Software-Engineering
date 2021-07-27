using System;
using System.Collections.Generic;
using System.Text;

namespace PersonInfo.Models
{
    class Robot
    {
        private string model;

        public string Model
        {
            get { return model; }
            set { model = value; }
        }
        private string id;

        public string Id
        {
            get { return id; }
            set { id = value; }
        }
        public Robot()
        {

        }
        public Robot(string model, string id)
        {
            this.Model = model;
            this.Id = id;
        }

    }
}
