import axios from "axios";

export function addEmployeePost(emp, setModalMsg) {
    axios.post("http://localhost:4000/employees/addEmployee", emp).then(function (response){
        setModalMsg(response.data)
    }).catch(function (error) {
        setModalMsg(error.data)
    })
}