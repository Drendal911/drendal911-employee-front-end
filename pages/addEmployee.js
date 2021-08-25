import AddEmployeeForm from "../components/AddEmployeeForm";
import {isValidEmployeeInput} from "../utils/utils";
import {addEmployeePost} from "../http/dbMethods";
import MyModal from "../components/layout/MyModal";


export default function AddEmployee(props) {
    const setModalMsg = props.setModalMsg
    const modalMsg = props.modalMsg
    const modalShow = props.modalShow
    const setModalShow = props.setModalShow
    const employeeState = props.employeeState
    const setEmployeeState = props.setEmployeeState

    function inputChangeHandler(e) {
        setEmployeeState((prevState) => {
                return {...prevState, [e.target.name]: e.target.value}
            }
        )
    }

    async function onSubmitClicked(e) {
        e.preventDefault()

        const validation = isValidEmployeeInput(employeeState)

        if (validation === 'ok') {
            addEmployeePost(employeeState, setModalMsg)
            setModalShow(true)
        }else {
            setModalMsg(validation)
            setModalShow(true)
        }

        /*switch (isValidAddEmployeeInput(employeeState)) {
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
        }*/
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