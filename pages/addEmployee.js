import AddEmployeeForm from "../components/AddEmployeeForm";
import {useState} from "react";
import {isValidAddEmployeeInput} from "../utils/utils";
import {addEmployeePost} from "../http/dbMethods";
import MyModal from "../components/layout/MyModal";


export default function AddEmployee(props) {
    const setModalMsg = props.setModalMsg
    const modalMsg = props.modalMsg
    const [modalShow, setModalShow] = useState(false);
    const [employeeState, setEmployeeState] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        position: "",
        birthDate: ""
    })

    function inputChangeHandler(e) {
        setEmployeeState((prevState) => {
                return {...prevState, [e.target.name]: e.target.value}
            }
        )
    }

    async function onSubmitClicked(e) {
        e.preventDefault()
        switch (isValidAddEmployeeInput(employeeState)) {
            case "firstName":
                setModalMsg(`Please enter a first name with letters only. 
                (First and last name, position, and birth date are required fields)`)
                setModalShow(true)
                break
            case "middleName":
                setModalMsg(`Please enter a middle name with letters only.`)
                setModalShow(true)
                break
            case "lastName":
                setModalMsg(`Please enter a last name with letters only. 
                (First and last name, position, and birth date are required fields)`)
                setModalShow(true)
                break
            case "position":
                setModalMsg(`Please enter a position. 
                (First and last name, position, and birth date are required fields)`)
                setModalShow(true)
                break
            case "birthDate":
                setModalMsg(`Please select a birth date. 
                (First and last name, position, and birth date are required fields)`)
                setModalShow(true)
                break
            default:
                addEmployeePost(employeeState, setModalMsg)
                setModalShow(true)
        }
    }

    return (
        <>
            <AddEmployeeForm
                employeeState={employeeState}
                setEmployeeState={setEmployeeState}
                onSubmitClicked={onSubmitClicked}
                inputChangeHandler={inputChangeHandler}
            />
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalMsg={modalMsg}
            />
        </>
    )
}