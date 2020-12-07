using System;
using System.Collections.Generic;
using System.Linq;
using Bogus;
using Microsoft.EntityFrameworkCore;
namespace Models
{
    public static class DataSeeding
    {
        public static string lang = "fr";

        public static ModelBuilder Users(this ModelBuilder modelBuilder, int count = 4)
        {
            int id = 1;
            var faker = new Faker<User>(DataSeeding.lang)
                .CustomInstantiator(f => new User { Id = id++ })
                .RuleFor(o => o.Nom, f => f.Name.LastName())
                .RuleFor(o => o.Prenom, f => f.Name.FirstName())
                .RuleFor(o => o.Email, f =>
                    id - 1 == 1 ? "sa@angular.io" :
                    id - 1 == 2 ? "admin@angular.io" :
                    (id - 1 == 3 ? "user@angular.io" : f.Internet.Email())
                )
                .RuleFor(o => o.Password, f => "123")
                .RuleFor(o => o.Phone, f => f.Phone.PhoneNumber())
                .RuleFor(o => o.IsActive, f => f.Random.Bool())
                .RuleFor(o => o.Matricule, f => f.Random.Int(1000, 2000).ToString())
                .RuleFor(o => o.Profil, f => id - 1 == 1 ? "sa" : (id - 1 == 2 ? "admin" : "user"))
                .RuleFor(o => o.ImageUrl, f => "")
                ;
            modelBuilder.Entity<User>().HasData(faker.Generate(count));
            return modelBuilder;
        }

    }
}