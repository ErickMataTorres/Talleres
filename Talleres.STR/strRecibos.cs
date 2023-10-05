using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Talleres.STR
{
    public class strRecibos
    {
        public string Nombres { get; set; }
        public string Carrera { get; set; }
        public string Telefono { get; set; }
        public string Matricula { get; set; }
        public string Correo { get; set; }
        public string FolioRecibo { get; set; }
        public List<strTalleres> Talleres { get; set; }
    }
}
