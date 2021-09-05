import axios from "axios";

export function addEmployeePost(emp, setModalMsg) {
    axios
        .post("http://localhost:4000/employees/addEmployee", emp)
        .then(function (response) {
            setModalMsg(response.data);
        })
        .catch(function (error) {
            setModalMsg(error.data);
        });
}

export function updateEmployeePost(emp, setModalMsg) {
    axios
        .post("http://localhost:4000/employees/updateEmployee", emp)
        .then(function (response) {
            setModalMsg(response.data);
        })
        .catch(function (error) {
            setModalMsg(error.message);
        });
}

export async function searchEmployeesPost(emp) {
    try {
        return (
            await axios.post("http://localhost:4000/employees/searchEmployees", emp)
        ).data;
    } catch (e) {
        return e.message;
    }
}

export async function searchEmployeesByIdPost(id) {
    try {
        return (
            await axios.post("http://localhost:4000/employees/searchEmployeesById", {id})
        ).data;
    } catch (e) {
        return e.message;
    }
}

export async function deleteEmployeesByIdPost(id) {
    try {
        return (
            await axios.post("http://localhost:4000/employees/deleteEmployeesById", {id})
        ).data;
    } catch (e) {
        return e.message;
    }
}

export async function getAllEmployees() {
    try {
        return (
            await axios.get("http://localhost:4000/employees")
        ).data;
    } catch (e) {
        return e.message;
    }
}

export function addSalaryPost(salary, setModalMsg) {
    axios
        .post("http://localhost:4000/salary/addSalary", salary)
        .then(function (response) {
            setModalMsg(response.data);
        })
        .catch(function (error) {
            setModalMsg(error.message);
        });
}

export function addBonusPost(bonus, setModalMsg) {
    axios
        .post("http://localhost:4000/bonus/addBonus", bonus)
        .then(function (response) {
            setModalMsg(response.data);
        })
        .catch(function (error) {
            setModalMsg(error.message);
        });
}

export function addCommissionPost(commission, setModalMsg) {
    axios
        .post("http://localhost:4000/commission/addCommission", commission)
        .then(function (response) {
            setModalMsg(response.data);
        })
        .catch(function (error) {
            setModalMsg(error.message);
        });
}

export function addAllowancePost(allowance, setModalMsg) {
    axios
        .post("http://localhost:4000/allowance/addAllowance", allowance)
        .then(function (response) {
            setModalMsg(response.data);
        })
        .catch(function (error) {
            setModalMsg(error.message);
        });
}

export function addAdjustmentPost(adjustment, setModalMsg) {
    axios
        .post("http://localhost:4000/adjustment/addAdjustment", adjustment)
        .then(function (response) {
            setModalMsg(response.data);
        })
        .catch(function (error) {
            setModalMsg(error.message);
        });
}

export async function searchCompensation(compensation) {
    try {
        return (
            await axios.post("http://localhost:4000/compensation", compensation)
        ).data;
    } catch (e) {
        return e.message;
    }
}

export async function editCompensation(compensation) {
    const connectionString = "http://localhost:4000/" + compensation.compType.toLowerCase() + "/edit" + compensation.compType
    try {
        return (
            await axios.post(connectionString, compensation)
        ).data;
    } catch (e) {
        return e.message;
    }
}