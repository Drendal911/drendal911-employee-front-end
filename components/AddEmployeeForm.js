import {Form, Row, Col, Button, Container} from "react-bootstrap";
import '../styles/Home.module.css'
import MyDatePicker from "./MyDatePicker";

// The first three div's are what is centering the form
export default function AddEmployeeForm(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">

                    <Form onSubmit={props.onSubmitClicked}>
                        <Container className="mt-2">
                            <h1 className="text-center mb-4">Add Employee</h1>
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
                                        onChange={props.inputChangeHandler}
                                    />
                                </Col>
                            </Row>
                            <Container className="d-flex justify-content-center mt-3">
                                <Row className="align-items-center">
                                    <Col>
                                        <MyDatePicker
                                            employeeState={props.employeeState}
                                            setEmployeeState={props.setEmployeeState}/>
                                    </Col>
                                </Row>
                            </Container>
                            <Button type="submit" className="mb-2">Submit
                            </Button>
                        </Container>
                    </Form>

                </div>
            </div>
        </div>
    )
}