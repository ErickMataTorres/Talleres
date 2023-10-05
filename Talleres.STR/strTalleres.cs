using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Talleres.STR
{
    public class strTalleres
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public int Profesor { get; set; }
        public string ProfesorNombre { get; set; }
        public int Cupo { get; set; }
        public decimal Precio { get; set; }
        public int Inscritos { get; set; }
        public int Turno { get; set; }
        public string Horario { get; set; }
        public int Congreso { get; set; }
        public string CongresoNombre { get; set; }
    }
}
