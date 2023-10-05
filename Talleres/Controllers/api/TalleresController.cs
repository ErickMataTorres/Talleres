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
    [RoutePrefix("api/talleres")]
    public class TalleresController : ApiController
    {
        [HttpGet]
        [Route("obtenerTalleres")]
        public IHttpActionResult obtenerTalleres(int turno, int congreso) {
            return Json(new daoTalleres().obtenerTalleres(turno, congreso));
        }

        [HttpPost]
        [Route("guardarTalleres")]
        public IHttpActionResult guardarTalleres(strTalleres data) {
            return Json(new daoTalleres().guardarTalleres(data));
        }

        [HttpPost]
        [Route("borrarTalleres")]
        public IHttpActionResult borrarTalleres(strTalleres data)
        {
            return Json(new daoTalleres().borrarTalleres(data));
        }

        [HttpPost]
        [Route("modificarTalleres")]
        public IHttpActionResult modificarTalleres(strTalleres data)
        {
            return Json(new daoTalleres().modificarTalleres(data));
        }

        //Profesores
        [HttpGet]
        [Route("obtenerProfesores")]
        public IHttpActionResult obtenerProfesores()
        {
            return Json(new daoProfesores().obtenerProfesores());
        }

        [HttpPost]
        [Route("guardarProfesores")]
        public IHttpActionResult guardarProfesores(strProfesores data)
        {
            return Json(new daoProfesores().guardarProfesores(data));
        }

        [HttpPost]
        [Route("modificarProfesores")]
        public IHttpActionResult modificarProfesores(strProfesores data)
        {
            return Json(new daoProfesores().modificarProfesores(data));
        }
        [HttpPost]
        [Route("borrarProfesores")]
        public IHttpActionResult borrarProfesores(strProfesores data)
        {
            return Json(new daoProfesores().borrarProfesores(data));
        }

        //Inscribirse
        [HttpPost]
        [Route("Inscripcion")]
        public IHttpActionResult Inscripcion(strInscripcion data)
        {
            return Json(new daoTalleres().Inscripcion(data));
        }

        [HttpPost]
        [Route("obtenerInscritos")]
        public IHttpActionResult obtenerInscritos(strTalleres data)
        {
            return Json(new daoTalleres().obtenerInscritos(data.Id));
        }
        [HttpGet]
        [Route("alumno")]
        public IHttpActionResult alumno(string matricula)
        {
            return Json(new daoTalleres().alumnos(matricula));
        }
        [HttpGet]
        [Route("ReinprimirRecibo")]
        public IHttpActionResult ReinprimirRecibo(string Matricula) {
            return Json(new daoTalleres().ReinprimirRecibo(Matricula));
        }
    }
}
