using RegisterForm.CommonLayer.Model;
using System.Data.SqlClient;

namespace RegisterForm.RepositoryLayer
{
    public class CrudOperationRL : ICrudOperationRL
    {
        public readonly IConfiguration _configuration;
        public readonly SqlConnection _sqlConnection;


        public CrudOperationRL(IConfiguration configuration) 
        {
            _configuration = configuration;
            _sqlConnection = new SqlConnection(_configuration[key: "ConnectionStrings:DBSettingConnection"]);
        }
        public async Task<CreateRecordRespones> CreateRecord(CreateRecordRequest request)
        {
            CreateRecordRespones respones= new CreateRecordRespones();
            respones.IsSuccess = true;
            respones.Message = "Successful";
            try
            {
                string sqlquery = "INSERT INTO Users ( CardID, Dateofbirth, name, surname, Companyname,TaxID, email, address, phone) " +
                    "Values ( @CardID, @Dateofbirth, @name, @surname, @Companyname, @TaxID, @email, @address, @phone)";
                using (SqlCommand sqlCommand = new SqlCommand(sqlquery,_sqlConnection)) 
                { 
                    sqlCommand.CommandType = System.Data.CommandType.Text;
                    sqlCommand.CommandTimeout = 180;
                    sqlCommand.Parameters.AddWithValue(parameterName: "@CardID", request.CardID);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@Dateofbirth", request.Dateofbirth);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@name", request.name);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@surname", request.surname);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@Companyname", request.Companyname);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@TaxID", request.TaxID);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@email", request.email);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@address", request.address);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@phone", request.phone);
                    _sqlConnection.Open();
                    
                    int status = await sqlCommand.ExecuteNonQueryAsync();
                    if (status <= 0)
                    {
                        respones.IsSuccess = false;
                        respones.Message = "Someting went Wrong";
                    }


                }
            
            }catch(Exception ex)
            {
                respones.IsSuccess = false;
                respones.Message = ex.Message;  

            }
            finally 
            {
                _sqlConnection.Close(); 
            }
            return respones;
        }

        public async Task<ReadRecordResponse> ReadRecord()
        {
            ReadRecordResponse response = new ReadRecordResponse();
            response.IsSuccess = true;
            response.Message = "Successful";
            try
            {
                string sqlQuery = "Select  id, CardID, Dateofbirth, name, surname, Companyname,TaxID, email, address, phone FROM Users; ";
                using (SqlCommand sqlCommand = new SqlCommand(sqlQuery, _sqlConnection))
                {
                    sqlCommand.CommandType = System.Data.CommandType.Text;
                    sqlCommand.CommandTimeout= 180;
                    _sqlConnection.Open();
                    using (SqlDataReader sqlDataReader = await sqlCommand.ExecuteReaderAsync())
                    {
                        if (sqlDataReader.HasRows)
                        {
                            response.readRecordData = new List<ReadRecordData>();
                            while (await sqlDataReader.ReadAsync())
                            {
                                ReadRecordData dbData = new ReadRecordData();
                                dbData.id =sqlDataReader[name: "id"] != DBNull.Value ? Convert.ToInt32(sqlDataReader[name: "id"]) : 0;
                                dbData.CardID = sqlDataReader[name: "CardID"] != DBNull.Value ? sqlDataReader[name: "CardID"].ToString() : string.Empty;
                                dbData.Dateofbirth = sqlDataReader[name: "Dateofbirth"] != DBNull.Value ? sqlDataReader[name: "Dateofbirth"].ToString() : string.Empty;
                                dbData.name = sqlDataReader[name: "name"] != DBNull.Value ? sqlDataReader[name: "name"].ToString() : string.Empty;
                                dbData.surname = sqlDataReader[name: "surname"] != DBNull.Value ? sqlDataReader[name: "surname"].ToString() : string.Empty;
                                dbData.Companyname = sqlDataReader[name: "Companyname"] != DBNull.Value ? sqlDataReader[name: "Companyname"].ToString() : string.Empty;
                                dbData.TaxID = sqlDataReader[name: "TaxID"] != DBNull.Value ? sqlDataReader[name: "TaxID"].ToString() : string.Empty;
                                dbData.email = sqlDataReader[name: "email"] != DBNull.Value ? sqlDataReader[name: "email"].ToString() : string.Empty;
                                dbData.address = sqlDataReader[name: "address"] != DBNull.Value ? sqlDataReader[name: "address"].ToString() : string.Empty;
                                dbData.phone = sqlDataReader[name: "phone"] != DBNull.Value ? sqlDataReader[name: "phone"].ToString() : string.Empty;
                                response.readRecordData.Add(dbData);
                            }
                        }
                    }
                }


            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
            }
            finally
            {
                _sqlConnection.Close();
            }
            return response;
        }
        public async Task<ReadRecordByIDResponse> ReadRecordByID(ReadRecordByIDRequest request)
        { 
            ReadRecordByIDResponse response = new ReadRecordByIDResponse();
            response.IsSuccess = true;
            response.Message = "Successful";
            try
            {
                string sqlQuery = "Select  id, CardID, Dateofbirth, name, surname, Companyname,TaxID, email, address, phone FROM Users where id = @id ";
                using (SqlCommand sqlCommand = new SqlCommand(sqlQuery, _sqlConnection))
                {
                    sqlCommand.CommandType = System.Data.CommandType.Text;
                    sqlCommand.CommandTimeout = 180;
                    sqlCommand.Parameters.AddWithValue(parameterName: "@id", request.id);
                    _sqlConnection.Open();
                    using (SqlDataReader sqlDataReader = await sqlCommand.ExecuteReaderAsync())
                    {
                        if (sqlDataReader.HasRows)
                        {
                            response.readRecordByIDData = new List<ReadRecordDataByid>();
                            while (await sqlDataReader.ReadAsync())
                            {
                                ReadRecordDataByid dbData = new ReadRecordDataByid();
                                dbData.id = sqlDataReader[name: "id"] != DBNull.Value ? Convert.ToInt32(sqlDataReader[name: "id"]) : 0;
                                dbData.CardID = sqlDataReader[name: "CardID"] != DBNull.Value ? sqlDataReader[name: "CardID"].ToString() : string.Empty;
                                dbData.Dateofbirth = sqlDataReader[name: "Dateofbirth"] != DBNull.Value ? sqlDataReader[name: "Dateofbirth"].ToString() : string.Empty;
                                dbData.name = sqlDataReader[name: "name"] != DBNull.Value ? sqlDataReader[name: "name"].ToString() : string.Empty;
                                dbData.surname = sqlDataReader[name: "surname"] != DBNull.Value ? sqlDataReader[name: "surname"].ToString() : string.Empty;
                                dbData.Companyname = sqlDataReader[name: "Companyname"] != DBNull.Value ? sqlDataReader[name: "Companyname"].ToString() : string.Empty;
                                dbData.TaxID = sqlDataReader[name: "TaxID"] != DBNull.Value ? sqlDataReader[name: "TaxID"].ToString() : string.Empty;
                                dbData.email = sqlDataReader[name: "email"] != DBNull.Value ? sqlDataReader[name: "email"].ToString() : string.Empty;
                                dbData.address = sqlDataReader[name: "address"] != DBNull.Value ? sqlDataReader[name: "address"].ToString() : string.Empty;
                                dbData.phone = sqlDataReader[name: "phone"] != DBNull.Value ? sqlDataReader[name: "phone"].ToString() : string.Empty;
                                response.readRecordByIDData.Add(dbData);
                            }
                        }
                    }
                }

            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
            }
            finally
            {
                _sqlConnection.Close();
            }
            return response;
        }

        public async Task<UpdateRecordResponse> UpdateRecord(UpdateRecordRequest request)
        {
            UpdateRecordResponse response = new UpdateRecordResponse();
            response.IsSuccess = true;
            response.Message = "Successful";
            try
            {
                string sqlquery = "update Users Set CardID = @CardID,Dateofbirth = @Dateofbirth,name = @name," +
                    "surname = @surname, Companyname = @Companyname, TaxID = @TaxID,email = @email,address = @address,phone = @phone  " +
                    "where id = @id";
                using (SqlCommand sqlCommand = new SqlCommand(sqlquery,_sqlConnection))
                {
                    sqlCommand.CommandType = System.Data.CommandType.Text;
                    sqlCommand.CommandTimeout= 180;
                    sqlCommand.Parameters.AddWithValue(parameterName: "@CardID", request.CardID);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@Dateofbirth", request.Dateofbirth);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@name", request.name);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@surname", request.surname);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@Companyname", request.Companyname);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@TaxID", request.TaxID);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@email", request.email);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@address", request.address);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@phone", request.phone);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@id", request.id);
                    _sqlConnection.Open();

                    int status = await sqlCommand.ExecuteNonQueryAsync();
                    if (status <= 0)
                    {
                        response.IsSuccess = false;
                        response.Message = "Someting went Wrong";
                    }
                }
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
            }
            finally
            {
                _sqlConnection.Close();
            }
            return response;
        }


        public async Task<DeleteRecordResponse> DeleteRecord(DeleteRecordRequest request)
        {
            DeleteRecordResponse response = new DeleteRecordResponse();
            response.IsSuccess = true;
            response.Message = "Successful";
            try
            {
                string sqlquery = "DELETE FROM Users where id = @id";
                using (SqlCommand sqlCommand = new SqlCommand(sqlquery, _sqlConnection))
                {
                    sqlCommand.CommandType = System.Data.CommandType.Text;
                    sqlCommand.CommandTimeout = 180;
                    sqlCommand.Parameters.AddWithValue(parameterName: "@id", request.id);
                    _sqlConnection.Open();

                    int status = await sqlCommand.ExecuteNonQueryAsync();
                    if (status <= 0)
                    {
                        response.IsSuccess = false;
                        response.Message = "Someting went Wrong";
                    }
                }
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
            }
            finally
            {
                _sqlConnection.Close();
            }
            return response;
        }



    }
}
