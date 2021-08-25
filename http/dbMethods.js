import axios from "axios";

export function addEmployeePost(emp, setModalMsg) {
    axios.post("http://localhost:4000/employees/addEmployee", emp).then(function (response) {
        setModalMsg(response.data)
    }).catch(function (error) {
        setModalMsg(error.data)
    })
}

export function updateEmployeePost(emp, setModalMsg) {
    axios.post("http://localhost:4000/employees/updateEmployee", emp).then(function (response) {
        setModalMsg(response.data)
    }).catch(function (error) {
        setModalMsg(error.data)
    })
}

export async function searchEmployeesPost(emp) {
    try {
        return (await axios.post("http://localhost:4000/employees/searchEmployees", emp)).data
    } catch (e) {
        return e
    }


}