using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Talleres.STR;

namespace Talleres.DAO
{
    public class daoCongresos
    {
        public List<strCongresos> obtener()
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Congresos_Obtener", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;

            strRespuesta res = new strRespuesta();
            List<strCongresos> l = new List<strCongresos>();
            try
            {
                objConn.Open();
                SqlDataReader lector = objCmd.ExecuteReader();
                while (lector.Read())
                {

                    strCongresos str = new strCongresos();
                    str.Id = int.Parse(lector["Id"].ToString());
                    str.Nombre = lector["Nombre"].ToString();
                    str.Estado = int.Parse(lector["Estado"].ToString());
                    l.Add(str);
                }
            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al traer la lista de Congresos: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return l;

        }

        public strRespuesta guardar(string Nombre)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Congresos_Guardar", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Nombre", Nombre);

            strRespuesta res = new strRespuesta();
           
            try
            {
                objConn.Open();
                objCmd.ExecuteNonQuery();
                res.Estado = 1;
                res.Mensaje = "Se ha guardado el congreso con exito";
            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al traer la lista de Congresos: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return res;

        }

        public strRespuesta modificar(int Id, string Nombre, int Estado)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Congresos_Modificar", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Id", Id);
            objCmd.Parameters.AddWithValue("@Nombre", Nombre);
            objCmd.Parameters.AddWithValue("@Estado", Estado);

            strRespuesta res = new strRespuesta();
           
            try
            {
                objConn.Open();
                objCmd.ExecuteNonQuery();
                res.Estado = 1;
                res.Mensaje = "Se ha guardado el congreso con exito";
            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al traer la lista de Congresos: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return res;

        }
    }
}
