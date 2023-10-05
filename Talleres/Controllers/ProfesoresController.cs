using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Talleres.Controllers
{
    public class ProfesoresController : Controller
    {
        // GET: Profesores
        public ActionResult Index()
        {
            var id = 0;
            if (System.Web.HttpContext.Current.Session["idUsuario"] != null)
            {
                id = (int)System.Web.HttpContext.Current.Session["idUsuario"];
            }
            if (id != 0)
            {
                return View();
            }
            else
            {
                return Redirect("~/Admin/Login");
            }
        }
    }
}