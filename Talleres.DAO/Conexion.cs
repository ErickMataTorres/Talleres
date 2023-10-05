using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Talleres.DAO
{
    public class Conexion
    {
        private SqlConnection objConn = new SqlConnection(ConfigurationManager.ConnectionStrings["sistema"].ConnectionString);

        private static Conexion instancia;
        public static Conexion Instancia
        {
            get
            {
                if (instancia == null) instancia = new Conexion();
                return instancia;
            }
        }

        public static string getConexionQry(string key)
        {
            //@"metadata=res://*/AUPA.EFsevelbampo.csdl|res://*/AUPA.EFsevelbampo.ssdl|res://*/AUPA.EFsevelbampo.msl;provider=System.Data.SqlClient;provider connection string=""@conexion""";
            if (key.ToString() == "")
                return ConfigurationManager.ConnectionStrings["sistema"].ConnectionString;
            else return ConfigurationManager.ConnectionStrings[key].ConnectionString;
        }

        public SqlConnection getConexion()
        {
            return new SqlConnection(ConfigurationManager.ConnectionStrings["sistema"].ConnectionString);
        }

    }
}
