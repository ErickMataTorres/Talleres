using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Talleres.STR;
using Talleres.DAO;

namespace Talleres.Controllers.api
{
    [RoutePrefix("api")]
    public class LoginController : ApiController
    {
        [Route("login")]
        [HttpPost]
        public IHttpActionResult login(strUsuarios data) {
            var res = new daoUsuarios().Login(data);
            System.Web.HttpContext.Current.Session.Add("idUsuario", res.Usuario.Id);
            return Json(res);
        }

        [Route("usuarios/agregar")]
        [HttpPost]
        public IHttpActionResult usuariosAgregar(strUsuarios data)
        {
            return Json(new daoUsuarios().usuarioGuardar(data));
        }

        [Route("usuarios")]
        [HttpGet]
        public IHttpActionResult usuariosObtener()
        {
            return Json(new daoUsuarios().obtenerTalleres());
        }
    }
}
