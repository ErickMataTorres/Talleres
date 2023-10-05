using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Talleres.STR
{
    public class strInscripcion
    {
        public strDatos Datos { get; set; }
        public List<strTaller> Talleres { get; set; }
    }
    public class strDatos
    {
        public string Nombres { get; set; }
        public string FolioRecibo { get; set; }
        public string Matricula { get; set; }
        public string Carrera { get; set; }
        public string Telefono { get; set; }
        public string Procedencia { get; set; }
        public int Taller { get; set; }
        public string Correo { get; set; }
    }
    public class strTaller {
        public int Taller { get; set; }
    }

}
