using System;
namespace Models
{
    public partial class Activation
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public DateTime Date { get; set; }
        public string NomProduit { get; set; }
        public string MacId { get; set; }
        public string CpuId { get; set; }
        public string BiosId { get; set; }
        public string BaseId { get; set; }
    }
}
