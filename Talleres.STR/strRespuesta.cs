using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Talleres.STR
{
    public class strRespuesta
    {
        public int Estado { get; set; }
        public string Mensaje { get; set; }
        public List<strTalleres> Talleres { get; set; }
        public List<strProfesores> Profesores { get; set; }
        public List<strUsuarios> Usuarios { get; set; }
        public strUsuarios Usuario { get; set; }
        public strRecibos Recibo { get; set; }
    }
}
