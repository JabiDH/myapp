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

        // GET api/UserAccounts
        public IQueryable<UserAccount> GetUserAccounts()
        {
            return db.UserAccounts;
        }

        // GET api/UserAccounts/5
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

        // PUT api/UserAccounts/5
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

        // POST api/UserAccounts
        [ResponseType(typeof(UserAccount))]
        public IHttpActionResult PostUserAccount(UserAccount useraccount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userAccount = db.UserAccounts.SingleOrDefault(user => user.Email == useraccount.Email);
            if (userAccount.Password != useraccount.Password)
            {
                return BadRequest();
            }
            //return CreatedAtRoute("DefaultApi", new { id = useraccount.Id }, useraccount);
            return Ok(userAccount);
        }

        // DELETE api/UserAccounts/5
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