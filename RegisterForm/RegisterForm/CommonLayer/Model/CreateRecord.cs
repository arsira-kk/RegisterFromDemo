namespace RegisterForm.CommonLayer.Model
{
    public class CreateRecordRequest
    {
        public string CardID { get; set; }
        public string Dateofbirth { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string Companyname { get; set; }
        public string TaxID { get; set; }
        public string email { get; set; }
        public string address { get; set; }
        public string phone { get; set; }
    }
    public class CreateRecordRespones
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }
}
