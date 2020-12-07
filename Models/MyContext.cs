using Microsoft.EntityFrameworkCore;

namespace Models
{
    public partial class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(options) { }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Activation> Activations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.Property(e => e.Nom);
                entity.Property(e => e.Prenom);
                entity.HasIndex(e => e.Email).IsUnique();
                entity.Property(e => e.Password);
                entity.Property(e => e.IsActive);
                entity.Property(e => e.Matricule);
                entity.Property(e => e.Profil);
                entity.Property(e => e.ImageUrl);
            });

            modelBuilder.Entity<Activation>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.Property(e => e.Nom);
                entity.Property(e => e.Prenom);
                entity.HasIndex(e => e.Email).IsUnique();
                entity.Property(e => e.Date);
                entity.Property(e => e.NomProduit);
                entity.Property(e => e.MacId);
                entity.Property(e => e.CpuId);
                entity.Property(e => e.BiosId);
                entity.Property(e => e.BaseId);
            });


            modelBuilder
                .Users(2)
                ;
        }


        // partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
