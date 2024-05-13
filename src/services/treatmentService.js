import axios from "axios";

export default class TreatmentService{
    getTreatments(){
        return axios.get("https://healtrip.azurewebsites.net/retreat/getAll")
    }
}