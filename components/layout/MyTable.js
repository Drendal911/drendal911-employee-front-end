import {Table, Modal, Button, Container, Card} from "react-bootstrap";
import {useState} from 'react'
import {useRouter} from 'next/router'
import Link from "next/link";
import {deleteEmployeesByIdPost, searchEmployeesByIdPost} from "../../http/dbMethods";

export default function MyTable(props) {
    const router = useRouter()
    const [showTableModal, setShowTableModal] = useState(false);
    const [employeeById, setEmployeeById] = useState({
        _id: "",
        firstName: "",
        middleName: "",
        lastName: "",
        position: "",
        birthDate: ""
    })

    const handleClose = () => setShowTableModal(false);
    const handleShow = () => setShowTableModal(true);
    const employeeList = props.employeeList
    let empID = {_id: ""}

    const onRowClick = (e) => {
        empID = {_id: e.target.parentNode.firstChild.firstChild.nodeValue}

        searchEmployeesByIdPost(empID).then(result => {
            setEmployeeById(prevState => {
                return {
                    ...prevState,
                    _id: result._id,
                    firstName: result.firstName,
                    middleName: result.middleName,
                    lastName: result.lastName,
                    position: result.position,
                    birthDate: result.birthDate
                }
            }, setShowTableModal(true) )

        })
    }

    const rows = employeeList.map((employee, _id) =>
        <tr onClick={onRowClick}
            key={_id}
        >
            <td>{employee._id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.middleName}</td>
            <td>{employee.lastName}</td>
        </tr>
    )

    function onDeleteEmployeeClicked() {
        deleteEmployeesByIdPost(employeeById._id).then(() => {
            router.reload()
        })
    }

    return (
        <>
            <Table striped bordered hover className="text-center">
                <thead>
                <tr>
                    <th>Unique ID</th>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
            {<Modal
                    show={showTableModal}
                    onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>ID: {employeeById._id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <Card>
                            <p className="mb-2">
                                {`Name: ${employeeById.firstName} ${employeeById.middleName} ${employeeById.lastName}`}
                            </p>
                            <p className="mb-2">BirthDate: {employeeById.birthDate.substring(0,10)}</p>
                            <p className="mb-0">Position: {employeeById.position}</p></Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Container className="text-center">
                            <Link
                                href={{
                                    pathname: "/addCompensation",
                                    query: {
                                        _id: employeeById._id
                                    }
                                }}
                            >
                                <Button variant="primary" className="me-1 mb-1"
                                >Add Compensation</Button>
                            </Link>
                            <Link
                                href={{
                                    pathname: "/viewCompensation",
                                    query: {
                                        _id: employeeById._id
                                    }
                                }}
                            >
                                <Button variant="primary" className="mb-1"
                                >View Compensation</Button>
                            </Link>
                            <Link
                                href={{
                                    pathname: "/editEmployee",
                                    query: {
                                        _id: employeeById._id,
                                        firstName: employeeById.firstName,
                                        middleName: employeeById.middleName,
                                        lastName: employeeById.lastName,
                                        position: employeeById.position,
                                        birthDate: employeeById.birthDate,
                                    }
                                }}
                            >
                                <Button variant="primary"
                                >Edit Employee</Button>
                            </Link>
                            <Button
                                className="ms-1"
                                variant="primary"
                                onClick={onDeleteEmployeeClicked}
                            >Delete Employee</Button>
                        </Container>
                    </Modal.Footer>
                </Modal>}
        </>
    );
};

