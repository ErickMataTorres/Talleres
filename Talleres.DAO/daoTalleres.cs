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
    public class daoTalleres
    {
        public List<strTalleres> obtenerTalleres(int turno, int congreso) {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Talleres_Obtener", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Turno", turno);
            objCmd.Parameters.AddWithValue("@Congreso", congreso);

            strRespuesta res = new strRespuesta();
            List<strTalleres> l = new List<strTalleres>();
            try
            {
                objConn.Open();
                SqlDataReader lector = objCmd.ExecuteReader();
                while (lector.Read()) {

                    strTalleres str = new strTalleres();
                    str.Id = int.Parse(lector["Id"].ToString());
                    str.Nombre = lector["Nombre"].ToString();
                    str.Profesor = int.Parse(lector["Profesor"].ToString());
                    str.ProfesorNombre = lector["ProfesorNombre"].ToString();
                    str.Cupo = int.Parse(lector["Cupo"].ToString());
                    str.Precio = Math.Round(decimal.Parse(lector["Precio"].ToString()), 2);
                    str.Inscritos = int.Parse(lector["Inscritos"].ToString());
                    str.Turno = int.Parse(lector["Turno"].ToString());
                    str.Horario = lector["Horario"].ToString();
                    str.Congreso = int.Parse(lector["Congreso"].ToString());
                    l.Add(str);
                }
            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al traer la lista de talleres: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return l;

        }

        public strTalleres obtenerTaller(int Id) {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Talleres_Obtener_Por_Id", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Id", Id);

            strTalleres str = new strTalleres();
            try
            {
                objConn.Open();
                SqlDataReader lector = objCmd.ExecuteReader();
                while (lector.Read())
                {

                    
                    str.Id = int.Parse(lector["Id"].ToString());
                    str.Nombre = lector["Nombre"].ToString();
                    str.Profesor = int.Parse(lector["Profesor"].ToString());
                    str.ProfesorNombre = lector["ProfesorNombre"].ToString();
                    str.Cupo = int.Parse(lector["Cupo"].ToString());
                    str.Precio = Math.Round(decimal.Parse(lector["Precio"].ToString()), 2);
                    str.Inscritos = int.Parse(lector["Inscritos"].ToString());
                    str.Horario = lector["Horario"].ToString();
                    str.Congreso = int.Parse(lector["Congreso"].ToString());

                }
            }
            catch (Exception ex)
            {
                
            }
            finally
            {
                objConn.Close();
            }
            return str;
        }

        public List<strDatos> obtenerInscritos(int Id)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Inscritos_Obtener", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Id", Id);

            List<strDatos> res = new List<strDatos>();
            try
            {
                objConn.Open();
                SqlDataReader lector = objCmd.ExecuteReader();
                while (lector.Read())
                {

                    strDatos str = new strDatos();
                    str.Nombres = lector["Nombres"].ToString();
                    str.Matricula = lector["Matricula"].ToString();
                    str.Carrera = lector["Carrera"].ToString();
                    str.Telefono = lector["Telefono"].ToString();
                    str.FolioRecibo = lector["FolioRecibo"].ToString();
                    res.Add(str);
                }
            }
            catch (Exception ex)
            {

            }
            finally
            {
                objConn.Close();
            }
            return res;
        }

        public strRespuesta guardarTalleres(strTalleres data)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Talleres_Guardar", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Nombre", data.Nombre);
            objCmd.Parameters.AddWithValue("@Precio", data.Precio);
            objCmd.Parameters.AddWithValue("@Profesor", data.Profesor);
            objCmd.Parameters.AddWithValue("@Cupo", data.Cupo);
            objCmd.Parameters.AddWithValue("@Turno", data.Turno);
            objCmd.Parameters.AddWithValue("@Horario", data.Horario);
            objCmd.Parameters.AddWithValue("@Congreso", data.Congreso);

            strRespuesta res = new strRespuesta();
            try
            {
                objConn.Open();
                objCmd.ExecuteNonQuery();
               
                res.Estado = 1;
                res.Mensaje = "Se ha guardado el taller con exito";

            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al guardar el taller: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return res;

        }

        public strRespuesta borrarTalleres(strTalleres data)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Talleres_Borrar", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Id", data.Id);

            strRespuesta res = new strRespuesta();
            try
            {
                objConn.Open();
                objCmd.ExecuteNonQuery();

                res.Estado = 1;
                res.Mensaje = "Se ha borrado el taller con exito";

            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al borrar el taller: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return res;

        }

        public strRespuesta modificarTalleres(strTalleres data)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Talleres_Modificar", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Id", data.Id);
            objCmd.Parameters.AddWithValue("@Nombre", data.Nombre);
            objCmd.Parameters.AddWithValue("@Precio", data.Precio);
            objCmd.Parameters.AddWithValue("@Profesor", data.Profesor);
            objCmd.Parameters.AddWithValue("@Cupo", data.Cupo);
            objCmd.Parameters.AddWithValue("@Turno", data.Turno);
            objCmd.Parameters.AddWithValue("@Horario", data.Horario);
            objCmd.Parameters.AddWithValue("@Congreso", data.Congreso);

            strRespuesta res = new strRespuesta();
            try
            {
                objConn.Open();
                objCmd.ExecuteNonQuery();

                res.Estado = 1;
                res.Mensaje = "Se ha guardado el taller con exito";

            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un problema al guardar el taller: " + ex.Message;
            }
            finally
            {
                objConn.Close();
            }
            return res;

        }

        public strRespuesta Inscripcion(strInscripcion data)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Inscritos_Guardar", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Nombres", data.Datos.Nombres);
            objCmd.Parameters.AddWithValue("@FolioRecibo", data.Datos.FolioRecibo);
            objCmd.Parameters.AddWithValue("@Matricula", data.Datos.Matricula);
            objCmd.Parameters.AddWithValue("@Telefono", data.Datos.Telefono);
            objCmd.Parameters.AddWithValue("@Procedencia", data.Datos.Procedencia);
            objCmd.Parameters.AddWithValue("@Carrera", data.Datos.Carrera);
            objCmd.Parameters.AddWithValue("@Correo", data.Datos.Correo);
            objCmd.Parameters.AddWithValue("@idTransaccion", Guid.NewGuid().ToString());
            objCmd.Parameters.Add(new SqlParameter("@Taller", ""));
            strRespuesta res = new strRespuesta();
            var aux = 0;
            var err = "";
            objConn.Open();
            foreach (var i in data.Talleres) {
                var r = new daoTalleres().obtenerTaller(i.Taller);

                if ((r.Inscritos + 1) <= r.Cupo)
                {
                    objCmd.Parameters["@Taller"].Value = i.Taller;

                    try
                    {
                       
                        SqlDataReader lec = objCmd.ExecuteReader();
                        if (lec.Read()) {
                            if (int.Parse(lec["res"].ToString()) == 1)
                            {
                                aux++;
                            }
                            else {
                                res.Estado = 0;
                                res.Mensaje = "Ya se ha usado el folio de tu recibo anteriormente.";
                                return res;
                            }
                            lec.Close();
                        }
                        
                    }
                    catch (Exception ex) {
                        err = ex.Message;
                    }
                }
            }
            objConn.Close();
            
            if (aux == data.Talleres.Count) {

                res.Estado = 1;
                res.Mensaje = "Se ha inscrito con exito";
            }
            else {
                res.Estado = 3;
                res.Mensaje = "Se ha inscrito con exito pero uno de los talleres se ha llenado antes de concretar la inscripción";
            }

            if (aux == 0) {
                res.Estado = 0;
                res.Mensaje = "ha ocurrido un problema al inscribirse a los talleres seleccionados: " + err;
            }
            return res;

        }

        public strAlumnos alumnos(string Matricula)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("select * from Alumnos where Matricula = @Matricula", objConn);
            objCmd.Parameters.AddWithValue("@Matricula", Matricula);

            strAlumnos str = new strAlumnos();
            try
            {
                objConn.Open();
                SqlDataReader lector = objCmd.ExecuteReader();
                if(lector.Read())
                {
                    str.Nombre = lector["Nombre"].ToString();
                    str.Carrera = lector["Carrera"].ToString();
                }
            }
            catch (Exception ex)
            {

            }
            finally
            {
                objConn.Close();
            }
            return str;
        }

        public strRespuesta ReinprimirRecibo(string Matricula)
        {
            var objConn = Conexion.Instancia.getConexion();
            SqlCommand objCmd = new SqlCommand("Recibo_Reinprimir", objConn);
            objCmd.CommandType = CommandType.StoredProcedure;
            objCmd.Parameters.AddWithValue("@Matricula", Matricula);

            strRespuesta res = new strRespuesta();
            strRecibos recibo = new strRecibos();
            List<strTalleres> talleres = new List<strTalleres>();
            try
            {
                objConn.Open();
                SqlDataReader lector = objCmd.ExecuteReader();
                while (lector.Read())
                {
                    strTalleres str = new strTalleres();
                    recibo.Nombres = lector["Nombres"].ToString();
                    recibo.Carrera = lector["Carrera"].ToString();
                    recibo.Telefono = lector["Telefono"].ToString();
                    recibo.Matricula = Matricula.ToString();
                    recibo.Correo = lector["Correo"].ToString();
                    recibo.FolioRecibo = lector["FolioRecibo"].ToString();
                    //Talleres
                    str.Nombre = lector["Nombre"].ToString();
                    str.ProfesorNombre = lector["Profesor"].ToString();
                    str.Turno = int.Parse(lector["Turno"].ToString());
                    str.Horario = lector["Horario"].ToString();
                    str.CongresoNombre = lector["Congreso"].ToString();
                    talleres.Add(str);
                    
                   
                }
                recibo.Talleres = talleres;
                res.Recibo = recibo;
                res.Estado = 1;
                res.Mensaje = "Recibo reinpreso";               
            }
            catch (Exception ex)
            {
                res.Estado = 0;
                res.Mensaje = "Ha ocurrido un error";
            }
            finally
            {
                objConn.Close();
            }
            return res;
        }
    }
}
