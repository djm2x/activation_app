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
    public class ActivationsController : SuperController<Activation>
    {
        public ActivationsController(MyContext context) : base(context)
        { }

        [HttpGet("{startIndex}/{pageSize}/{sortBy}/{sortDir}/{nom}/{prenom}/{email}/{nomProduit}/{macId}/{cpuId}/{biosId}/{baseId}")]
        public async Task<IActionResult> GetAll(int startIndex, int pageSize, string sortBy, string sortDir, string nom, string prenom, string email, string nomProduit, string macId, string cpuId, string biosId, string baseId)
        {
            var q = _context.Activations
                .Where(e => nom == "*" ? true : e.Nom.ToLower().Contains(nom.ToLower()))
                .Where(e => prenom == "*" ? true : e.Prenom.ToLower().Contains(prenom.ToLower()))
                .Where(e => email == "*" ? true : e.Email.ToLower().Contains(email.ToLower()))
                .Where(e => nomProduit == "*" ? true : e.NomProduit.ToLower().Contains(nomProduit.ToLower()))
                .Where(e => macId == "*" ? true : e.MacId.ToLower().Contains(macId.ToLower()))
                .Where(e => cpuId == "*" ? true : e.CpuId.ToLower().Contains(cpuId.ToLower()))
                .Where(e => biosId == "*" ? true : e.BiosId.ToLower().Contains(biosId.ToLower()))
                .Where(e => baseId == "*" ? true : e.BaseId.ToLower().Contains(baseId.ToLower()))

                ;

            int count = await q.CountAsync();

            var list = await q.OrderByName<Activation>(sortBy, sortDir == "desc")
                .Skip(startIndex)
                .Take(pageSize)

                .Select(e => new
                {
                    id = e.Id,
                    nom = e.Nom,
                    prenom = e.Prenom,
                    email = e.Email,
                    date = e.Date,
                    nomProduit = e.NomProduit,
                    macId = e.MacId,
                    cpuId = e.CpuId,
                    biosId = e.BiosId,
                    baseId = e.BaseId,

                })
                .ToListAsync()
                ;

            return Ok(new { list = list, count = count });
        }
    }
}