import {useRouter} from "next/router";
import EditEmployeeForm from "../components/EditEmployeeForm";
import MyModal from "../components/layout/MyModal";
import {Container} from "react-bootstrap";
import {useState} from "react";
import {capitalizeString, isValidEmployeeInput} from "../utils/utils";
import {updateEmployeePost} from "../http/dbMethods";

export default function EditEmployee(props) {
    const setModalMsg = props.setModalMsg
    const modalMsg = props.modalMsg
    const modalShow = props.modalShow
    const setModalShow = props.setModalShow
    const router = useRouter()
    const {
        query: {
            _id,
            firstName,
            middleName,
            lastName,
            position,
            birthDate
        },
    } = router

    const [selectedEmployee, setSelectedEmployee] = useState({
        _id: _id,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        position: position,
        birthDate: birthDate
    })

    function inputChangeHandler(e) {
        setSelectedEmployee((prevState) => {
                return {...prevState, [e.target.name]: capitalizeString(e.target.value)}
            })
    }

    async function onSubmitClicked(e) {
        e.preventDefault()
        const validation = isValidEmployeeInput(selectedEmployee)

        if (validation === 'ok') {
            updateEmployeePost(selectedEmployee, setModalMsg)
            setModalShow(true)
        }else {
            setModalMsg(validation)
            setModalShow(true)
        }
    }

    return (
        <>
            <Container>
                <EditEmployeeForm
                    selectedEmployee={selectedEmployee}
                    setSelectedEmployee={setSelectedEmployee}
                    onSubmitClicked={onSubmitClicked}
                    inputChangeHandler={inputChangeHandler}
                />
                <MyModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    modalMsg={modalMsg}
                />
            </Container>
        </>
    )
}