using System;
using System.Collections.Generic;
using System.Text;

namespace PlayersAndMonsters
{
    class Hero
    {
        private string username;
        private int level;

        public int Level
        {
            get { return level; }
            set { level = value; }
        }


        public string Username
        {
            get { return username; }
            set { username = value; }
        }
        public Hero(string username, int level)
        {
            this.username = username;
            this.level = level;
        }
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append($"Type: {this.GetType().Name} Username: {this.Username} Level: {this.Level}");
            return sb.ToString();
        }
    }
}
