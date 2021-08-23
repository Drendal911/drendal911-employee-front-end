import axios from "axios";

export function addEmployeePost(emp, setModalMsg) {
    axios.post("http://localhost:4000/employees/addEmployee", emp).then(function (response){
        setModalMsg(response.data)
    }).catch(function (error) {
        setModalMsg(error.data)
    })
}

export function searchEmployeesPost(emp) {
    axios.post("http://localhost:4000/employees/searchEmployees", emp).then(function (response){
        console.log(response.data)
    }).catch(function (error) {
        console.log(error.data)
    })
}