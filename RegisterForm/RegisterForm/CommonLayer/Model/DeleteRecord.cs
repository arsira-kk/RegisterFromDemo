namespace RegisterForm.CommonLayer.Model
{
    public class DeleteRecordRequest
    {
        public int id { get; set; }
    }

    public class DeleteRecordResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }

    }
}
