using System;
using System.Collections.Generic;
namespace Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsActive { get; set; }
        public string Matricule { get; set; }
        public string Phone { get; set; }
        public string Profil { get; set; }
        public string ImageUrl { get; set; }

    }
}
