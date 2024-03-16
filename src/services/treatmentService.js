import axios from "axios";

export default class TreatmentService{
    getTreatments(){
        return axios.get("http://localhost:8080/retreat/getAll")
    }
}