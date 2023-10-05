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
    public class daoUsuarios
    {
        public strRespuesta Login(strUsuarios data)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Usuario_Login", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Usuario", data.Usuario);
            objCmd.Parameters.AddWithValue("@Contrasena", data.Contrasena);

            strRespuesta res = new strRespuesta();
            
            try
            {
                objConn.Open();
                SqlDataReader lector = objCmd.ExecuteReader();
                if (lector.Read())
                {
                    strUsuarios str = new strUsuarios();
                    str.Id = int.Parse(lector["Id"].ToString());
                    
                    res.Estado = 1;
                    res.Mensaje = "Inicio de sesión exitoso";
                    res.Usuario = str;
                }
                else {
                    res.Estado = 0;
                    res.Mensaje = "Usuario o contraseña incorrecto";

                }
                
            }
            catch (Exception ex)
            {
                res.Estado = 2;
                res.Mensaje = "Ha ocurrido un problema al iniciar sesión: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return res;

        }

        public strRespuesta usuarioGuardar(strUsuarios data)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Usuarios_Agregar", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Id", data.Usuario);
            objCmd.Parameters.AddWithValue("@Usuario", data.Usuario);
            objCmd.Parameters.AddWithValue("@Contrasena", data.Contrasena);
            objCmd.Parameters.AddWithValue("@Tipo", data.Contrasena);
            objCmd.Parameters.AddWithValue("@Estado", data.Contrasena);

            strRespuesta res = new strRespuesta();

            try
            {
                objConn.Open();
                SqlDataReader lector = objCmd.ExecuteReader();
                if (lector.Read())
                {

                    res.Estado = int.Parse(lector["Estado"].ToString()) ;
                    res.Mensaje = lector["Mensaje"].ToString();
                }

            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al iniciar sesión: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return res;

        }

        public strRespuesta obtenerTalleres()
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Usuarios_Obtener", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;

            strRespuesta res = new strRespuesta();
            List<strUsuarios> l = new List<strUsuarios>();
            try
            {
                objConn.Open();
                SqlDataReader lector = objCmd.ExecuteReader();
                while (lector.Read())
                {

                    strUsuarios str = new strUsuarios();
                    str.Id = int.Parse(lector["Id"].ToString());
                    str.Tipo = int.Parse(lector["Tipo"].ToString());
                    str.Usuario = lector["Usuario"].ToString();
                    str.Estado = int.Parse(lector["Estado"].ToString());

                    l.Add(str);
                }
                res.Estado = 1;
                res.Mensaje = "Lista de usuarios traida con exito";
                res.Usuarios = l;
            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al traer la lista de usuarios: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return res;

        }
    }
}
