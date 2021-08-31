import AddEmployeeForm from "../components/AddEmployeeForm";
import {capitalizeString, isValidEmployeeInput} from "../utils/utils";
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
                return {...prevState, [e.target.name]: capitalizeString(e.target.value)}
            }
        )
    }

    async function onSubmitClicked(e) {
        e.preventDefault()

        const validation = isValidEmployeeInput(employeeState)
        if (validation === 'ok') {
            addEmployeePost(employeeState, setModalMsg)
            setModalShow(true)
        } else {
            setModalMsg(validation)
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