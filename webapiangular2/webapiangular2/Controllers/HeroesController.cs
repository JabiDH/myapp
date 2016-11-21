using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapiangular2.Models;

namespace webapiangular2.Controllers
{
    public class HeroesController : ApiController
    {
        // GET api/<controller>
        public static List<Hero> Repo;

        public HeroesController()
        {
            if (Repo != null && Repo.Count > 0)
            {
                return;
            }
            Repo = new List<Hero>();
            var random = new Random();
            for (int i = 1; i <= 10; i++)
            {
                Repo.Add(new Hero()
                {
                    Id = i,
                    Name = "Hero_" + i
                });
            }
        }

        public IEnumerable<Hero> Get()
        {
            return Repo;            
        }

        // GET api/<controller>/5
        public Hero Get(int id)
        {
            return Repo.Find(h => h.Id == id);
        }

        // POST api/<controller>
        public Hero Post(Hero newHero)
        {
            if (newHero == null)
                return null;
            var id = Repo.LastOrDefault().Id + 1;
            var hero = new Hero()
            {
                Id = id,
                Name = newHero.Name
            };
            Repo.Add(hero);
            return hero;
        }

        // PUT api/<controller>/5
        public Hero Put(int id, Hero hero)
        {
            if (hero == null)
            {
                return null;
            }
            var currentHero = Repo.Find(h => h.Id == id);
            if (currentHero != null)
            {
                currentHero.Name = hero.Name;
            }
            return currentHero;
        }

        // DELETE api/<controller>/5
        public Hero Delete(int id)
        {
            var hero = Repo.Find(h => h.Id == id);
            Repo.Remove(hero);
            return hero;
        }
    }
}