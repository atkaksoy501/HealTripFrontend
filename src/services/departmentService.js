import axios from "axios";

export default class DepartmentService{
    getDepartments(){
        return axios.get("https://healtrip.azurewebsites.net/department/getAll")
    }
}