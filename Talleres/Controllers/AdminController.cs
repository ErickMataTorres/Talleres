using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Talleres.DAO;
using Talleres.STR;

namespace Talleres.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        public ActionResult Login()
        {
            ViewBag.Title = "Iniciar sesión";
            return View();
        }
        public JsonResult Log(strUsuarios data) {
            var res = new daoUsuarios().Login(data);
            try
            {
                System.Web.HttpContext.Current.Session.Add("idUsuario", res.Usuario.Id);
            }
            catch (Exception ex) {

            }
            
            return Json(res);
        }
        public ActionResult Home() {
            
            var id = 0;
            if (System.Web.HttpContext.Current.Session["idUsuario"] != null)
            {
                id = (int)System.Web.HttpContext.Current.Session["idUsuario"];
            }
            if (id != 0)
            {
                ViewBag.Title = "Inicio Administracón";
                return View();
            }
            else
            {
                return Redirect("~/Admin/Login");
            }
        }
        
    }
}