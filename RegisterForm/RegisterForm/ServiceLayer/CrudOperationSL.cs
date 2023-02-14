using RegisterForm.CommonLayer.Model;
using RegisterForm.RepositoryLayer;

namespace RegisterForm.ServiceLayer
{
    public class CrudOperationSL : ICrudOperationSL
    {

        public readonly ICrudOperationRL _crudOperationRL;

        public CrudOperationSL(ICrudOperationRL crudOperationRL)
        {
            _crudOperationRL = crudOperationRL;        
        }
        public async Task<CreateRecordRespones> CreateRecord(CreateRecordRequest request)
        {
            return await _crudOperationRL.CreateRecord(request);
        }

        public async Task<ReadRecordResponse> ReadRecord()
        {
            return await _crudOperationRL.ReadRecord();
        }

        public async Task<ReadRecordByIDResponse> ReadRecordByID(ReadRecordByIDRequest request)
        {
            return await _crudOperationRL.ReadRecordByID(request);
        }

        public async Task<UpdateRecordResponse> UpdateRecord(UpdateRecordRequest request)
        {
            return await _crudOperationRL.UpdateRecord(request);
        }

        public async Task<DeleteRecordResponse> DeleteRecord(DeleteRecordRequest request)
        {
            return await _crudOperationRL.DeleteRecord(request);
        }
    }
}
