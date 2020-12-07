using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;
using Api.Providers;
using Microsoft.AspNetCore.WebUtilities;
using System.Text;

namespace Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UsersController : SuperController<User>
    {
        public UsersController(MyContext context) : base(context)
        { }

        [HttpGet("{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{prenom}/{email}/{matricule}/{profil}")]
        public async Task<IActionResult> GetAll(int startIndex, int pageSize, string sortBy, string sortDir, string nom, string prenom, string email, string matricule, string profil)
        {
            var q = _context.Users
                .Where(e => nom == "*" ? true : e.Nom.ToLower().Contains(nom.ToLower()))
                .Where(e => prenom == "*" ? true : e.Prenom.ToLower().Contains(prenom.ToLower()))
                .Where(e => email == "*" ? true : e.Email.ToLower().Contains(email.ToLower()))
                .Where(e => matricule == "*" ? true : e.Matricule.ToLower().Contains(matricule.ToLower()))
                .Where(e => profil == "*" ? true : e.Profil.ToLower().Contains(profil.ToLower()))

                ;

            int count = await q.CountAsync();

            var list = await q.OrderByName<User>(sortBy, sortDir == "desc")
                .Skip(startIndex)
                .Take(pageSize)

                .Select(e => new
                {
                    id = e.Id,
                    nom = e.Nom,
                    prenom = e.Prenom,
                    email = e.Email,
                    password = e.Password,
                    isActive = e.IsActive,
                    matricule = e.Matricule,
                    profil = e.Profil,
                    imageUrl = e.ImageUrl,
                    Phone = e.Phone,

                })
                .ToListAsync()
                ;

            return Ok(new { list = list, count = count });
        }

       

    }
}