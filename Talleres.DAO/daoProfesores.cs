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
    public class daoProfesores
    {

        public List<strProfesores> obtenerProfesores()
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Profesores_Obtener", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;

            strRespuesta res = new strRespuesta();
            List<strProfesores> l = new List<strProfesores>();
            try
            {
                objConn.Open();
                SqlDataReader lector = objCmd.ExecuteReader();
                while (lector.Read())
                {

                    strProfesores str = new strProfesores();
                    str.Id = int.Parse(lector["Id"].ToString());
                    str.Nombre = lector["Nombre"].ToString();

                    l.Add(str);
                }
                //res.Estado = 1;
                //res.Mensaje = "Lista de profesores traida con exito";
                //res.Profesores = l;
            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al traer la lista de profesores: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return l;

        }

        public strRespuesta guardarProfesores(strProfesores data)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Profesores_Guardar", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Nombre", data.Nombre);


            strRespuesta res = new strRespuesta();
            try
            {
                objConn.Open();
                objCmd.ExecuteNonQuery();

                res.Estado = 1;
                res.Mensaje = "Se ha guardado al profesor con exito";

            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al guardar al profesor: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return res;

        }

        public strRespuesta modificarProfesores(strProfesores data)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Profesores_Modificar", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Id", data.Id);
            objCmd.Parameters.AddWithValue("@Nombre", data.Nombre);


            strRespuesta res = new strRespuesta();
            try
            {
                objConn.Open();
                objCmd.ExecuteNonQuery();

                res.Estado = 1;
                res.Mensaje = "Se ha guardado al profesor con exito";

            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al guardar al profesor: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return res;

        }

        public strRespuesta borrarProfesores(strProfesores data)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Profesores_Borrar", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Id", data.Id);


            strRespuesta res = new strRespuesta();
            try
            {
                objConn.Open();
                objCmd.ExecuteNonQuery();

                res.Estado = 1;
                res.Mensaje = "Se ha borrado al profesor con exito";

            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al borrar al profesor: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return res;

        }
    }
}
