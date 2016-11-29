using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using webapiangular2.Models;

namespace webapiangular2.Controllers
{
    public class UserAccountsController : ApiController
    {
        private MyAppContext db = new MyAppContext();

        // GET api/Users
        public IQueryable<UserAccount> GetUserAccounts()
        {
            return db.UserAccounts;
        }

        // GET api/Users/5
        [ResponseType(typeof(UserAccount))]
        public IHttpActionResult GetUserAccount(int id)
        {
            UserAccount useraccount = db.UserAccounts.Find(id);
            if (useraccount == null)
            {
                return NotFound();
            }

            return Ok(useraccount);
        }

        // PUT api/Users/5
        public IHttpActionResult PutUserAccount(int id, UserAccount useraccount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != useraccount.Id)
            {
                return BadRequest();
            }

            db.Entry(useraccount).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserAccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST api/Users
        [ResponseType(typeof(UserAccount))]
        public IHttpActionResult PostUserAccount(UserAccount useraccount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = db.UserAccounts.SingleOrDefault(ua => ua.Email == useraccount.Email);
            if (user != null)
            {
                if (user.Password == useraccount.Password)
                {
                    return Ok(useraccount);
                }
                else {
                    return Json<string>("Wrong Password!");
                }                
            }

            return Json<string>("Email address not found!");
        }

        // DELETE api/Users/5
        [ResponseType(typeof(UserAccount))]
        public IHttpActionResult DeleteUserAccount(int id)
        {
            UserAccount useraccount = db.UserAccounts.Find(id);
            if (useraccount == null)
            {
                return NotFound();
            }

            db.UserAccounts.Remove(useraccount);
            db.SaveChanges();

            return Ok(useraccount);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserAccountExists(int id)
        {
            return db.UserAccounts.Count(e => e.Id == id) > 0;
        }
    }
}