using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Talleres.DAO;
using Talleres.STR;

namespace Talleres.Controllers.api
{
    [RoutePrefix("api/congresos")]
    public class CongresosController : ApiController
    {
        [HttpGet]
        [Route("Obtener")]
        public IHttpActionResult obtener()
        {
            return Json(new daoCongresos().obtener());
        }
        [HttpGet]
        [Route("Guardar")]
        public IHttpActionResult guardar(string Nombre)
        {
            return Json(new daoCongresos().guardar(Nombre));
        }
        [HttpGet]
        [Route("Modificar")]
        public IHttpActionResult modificar(int Id, string Nombre, int Estado)
        {
            return Json(new daoCongresos().modificar(Id, Nombre, Estado));
        }
    }
}