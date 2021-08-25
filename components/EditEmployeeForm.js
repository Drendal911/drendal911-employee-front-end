import {Form, Row, Col, Button, Container} from "react-bootstrap";
import '../styles/Home.module.css'
import MyDatePicker from "./MyDatePicker";

// The first three div's are what is centering the form
export default function EditEmployeeForm(props) {
    const selectedEmployee = props.selectedEmployee
    const setSelectedEmployee = props.setSelectedEmployee


    function button(e) {
        console.log(selectedEmployee)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">

                    <Form onSubmit={props.onSubmitClicked}>
                        <Container className="mt-2">
                            <h1 className="text-center mb-4">Edit Employee</h1>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <Form.Control
                                        readOnly={true}
                                        className={"text-center mb-2"}
                                        id="inlineFormInput"
                                        placeholder="UID"
                                        name="_id"
                                        type="text"
                                        defaultValue={selectedEmployee._id}
                                        onChange={props.inputChangeHandler}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                        Name
                                    </Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        id="inlineFormInput"
                                        placeholder="First Name"
                                        name="firstName"
                                        defaultValue={selectedEmployee.firstName}
                                        onChange={props.inputChangeHandler}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                        Name
                                    </Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        id="inlineFormInput"
                                        placeholder="Middle Name"
                                        name="middleName"
                                        value={selectedEmployee.middleName}
                                        onChange={props.inputChangeHandler}
                                    />
                                </Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col>
                                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                        Name
                                    </Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        id="inlineFormInput"
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={selectedEmployee.lastName}
                                        onChange={props.inputChangeHandler}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                        Name
                                    </Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        id="inlineFormInput"
                                        placeholder="Position"
                                        name="position"
                                        value={selectedEmployee.position}
                                        onChange={props.inputChangeHandler}
                                    />
                                </Col>
                            </Row>
                            <Container className="d-flex justify-content-center mt-3">
                                <Row>
                                    <Col>
                                        <MyDatePicker
                                            employeeState={selectedEmployee}
                                            setEmployeeState={setSelectedEmployee}/>
                                    </Col>
                                </Row>
                            </Container>
                            <Button onClick={button} type="submit" className="mb-2"
                            >Submit
                            </Button>
                        </Container>
                    </Form>

                </div>
            </div>
        </div>
    )
}