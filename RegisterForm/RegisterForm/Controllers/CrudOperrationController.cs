using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RegisterForm.CommonLayer.Model;
using RegisterForm.ServiceLayer;

namespace RegisterForm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrudOperrationController : ControllerBase
    {

        public readonly ICrudOperationSL _crudOperationSL;

        public CrudOperrationController(ICrudOperationSL crudOperationSL)
        {
            _crudOperationSL = crudOperationSL;
        }

        [HttpPost]
        [Route(template: "CreateReacord")]
        public async Task<IActionResult> CreateReacord(CreateRecordRequest request)
        {
            CreateRecordRespones respones = null;


            try
            {
                respones = await _crudOperationSL.CreateRecord(request);
            }
            catch (Exception ex)
            { 
                respones.IsSuccess = false;
                respones.Message = ex.Message;
            }

            return Ok(respones);
        }

        [HttpGet]
        [Route(template: "ReadRecord")]
        public async Task<IActionResult> ReadRecord()
        {

            ReadRecordResponse respones = null;
            try 
            {
                respones = await _crudOperationSL.ReadRecord();

            }catch(Exception ex) 
            {
            
            }
            return Ok(respones);
        }

        [HttpPost]
        [Route(template: "ReadRecordByID")]
        public async Task<IActionResult> ReadRecordByID(ReadRecordByIDRequest request)
        {

            ReadRecordByIDResponse respones = null;
            try
            {
                respones = await _crudOperationSL.ReadRecordByID(request);

            }
            catch (Exception ex)
            {

            }
            return Ok(respones);
        }

      

        [HttpPut]
        [Route(template: "UpdateRecord")]
        public async Task<IActionResult> UpdateRecord(UpdateRecordRequest request)
        {

            UpdateRecordResponse respones = null;
            try
            {
                respones = await _crudOperationSL.UpdateRecord(request);

            }
            catch (Exception ex)
            {

            }
            return Ok(respones);
        }


        [HttpDelete]
        [Route(template: "DeleteRecord")]
        public async Task<IActionResult> DeleteRecord(DeleteRecordRequest request)
        {

            DeleteRecordResponse respones = null;
            try
            {
                respones = await _crudOperationSL.DeleteRecord(request);

            }
            catch (Exception ex)
            {

            }
            return Ok(respones);
        }

    }


}
