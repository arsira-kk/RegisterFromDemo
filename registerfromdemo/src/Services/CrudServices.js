import Configuration from "./../Configuration/Configuration"
import Axios from "./AxiosServices"

const axios = new Axios();
//const Config = new Configuration();

export default class CrudServices {

    CreateRecord(data){
        console.log("data : ",data," Url : ",Configuration.CreateRecord);
        return axios.post(Configuration.CreateRecord, data, false);
    }

    ReadRecord(){
        console.log(" Url : ",Configuration.GetRecord);
        return (Configuration.GetRecord);
    }

    ReadRecordByID(){
        console.log(" Url : ",Configuration.getRecordByID);
        return (Configuration.getRecordByID);
    }

    DeleteRecord(data){
        console.log("data : ",data," Url : ",Configuration.DeleteRecord);
        return (Configuration.DeleteRecord, data, false);
    }
 
}
