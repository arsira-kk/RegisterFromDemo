using RegisterForm.CommonLayer.Model;

namespace RegisterForm.ServiceLayer
{
    public interface ICrudOperationSL
    {

        public Task<CreateRecordRespones> CreateRecord(CreateRecordRequest request);

        public Task<ReadRecordResponse> ReadRecord();

        public Task<ReadRecordByIDResponse> ReadRecordByID(ReadRecordByIDRequest request);

        public Task<UpdateRecordResponse> UpdateRecord(UpdateRecordRequest request);

        public Task<DeleteRecordResponse> DeleteRecord(DeleteRecordRequest request);
    }
}
