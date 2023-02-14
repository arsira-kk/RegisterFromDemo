namespace RegisterForm.CommonLayer.Model
{
    public class ReadRecordByIDResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }

        public List<ReadRecordDataByid> readRecordByIDData { get; set; }
    }
    public class ReadRecordByIDRequest
    {
        public int id { get; set; }
      
    }

    public class ReadRecordDataByid
    {
        public int id { get; set; }
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
}
