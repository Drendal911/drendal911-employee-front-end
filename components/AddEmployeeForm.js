import {Form, Row, Col, Button, Container} from "react-bootstrap";
import MyDatePicker from "./layout/MyDatePicker";

export default function AddEmployeeForm(props) {
    return (
        <Container className="mt-3">
            <h1 className="text-center mb-4">Add Employee</h1>
                        <Container className="mt-2">
                            <Row className="mb-3">
                                <Col/>
                                <Col xs={6}>
                                    <Form onSubmit={props.onSubmitClicked}>
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
                                        <Container className="d-flex justify-content-center mt-3">
                                        <Row >
                                            <Col>
                                                <MyDatePicker
                                                    employeeState={props.employeeState}
                                                    setEmployeeState={props.setEmployeeState}/>
                                            </Col>
                                        </Row>
                                    </Container>
                                        <Button type="submit" className="mb-2">Submit
                                    </Button>
                                    </Form>
                                </Col>
                                <Col/>
                            </Row>
                        </Container>

        </Container>
    )
}