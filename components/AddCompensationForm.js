import {Form, Button, Container, Row, Col, Dropdown, DropdownButton, NavItem, Nav} from "react-bootstrap";
import MyDatePicker from "./layout/MyDatePicker";
import {useState} from "react";
import {isValidCompensationInput} from "../utils/utils";
import {useRouter} from "next/router";

export default function AddCompensationForm(props) {
    const router = useRouter();
    const eID = props.eID
    const [compensationState, setCompensationState] = useState({
        eID: eID,
        compType: '',
        amount: '',
        description: '',
        date: '',
    })

    function onDropDownClick(e) {
        console.log(compensationState)
        setCompensationState(prevState => {
            return {
                ...prevState,
                compType: e
            }
        })
    }

    function inputChangeHandler(e) {
        setCompensationState((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    function onAddCompensationClicked(e) {
        e.preventDefault()
        console.log(compensationState)
        const validation = isValidCompensationInput(compensationState)
        if (validation === 'ok') {
            addSalaryPost(compensationState)

        } else {

        }

        router.push("/")
    }

    return (
        <Container className="mt-3">
            <h1 className="mb-4 text-center">Add Compensation</h1>
            <Row className="mb-3">
                <Col/>
                <Col xs={6}>
                    <DropdownButton id="dropdown-basic-button" title="Compensation Type">
                        <Dropdown.Item eventKey="Salary" onSelect={onDropDownClick}>Salary</Dropdown.Item>
                        <Dropdown.Item eventKey="Bonus" onSelect={onDropDownClick}>Bonus</Dropdown.Item>
                        <Dropdown.Item eventKey="Commission" onSelect={onDropDownClick}>Commission</Dropdown.Item>
                        <Dropdown.Item eventKey="Allowance" onSelect={onDropDownClick}>Allowance</Dropdown.Item>
                        <Dropdown.Item eventKey="Adjustment" onSelect={onDropDownClick}>Adjustment</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col/>
            </Row>
            <Row>
                <Col/>
                <Col xs={6}>
                    <Form>
                        <Form.Group sm="true" className="mb-3">
                            <Form.Control type="text"
                                          placeholder="Compensation Type"
                                          value={compensationState.compType}
                                          disabled={true}/>
                            <Form.Text className="text-muted"/>
                        </Form.Group>
                        <Form.Group sm="true" className="mb-3">
                            <Form.Control type="text"
                                          placeholder="Amount"
                                          name="amount"
                                          onChange={inputChangeHandler}/>
                            <Form.Text className="text-muted"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text"
                                          placeholder="Description"
                                          name="description"
                                          onChange={inputChangeHandler}/>
                        </Form.Group>
                        <Container className="d-flex justify-content-center mt-3">
                            <Row>
                                <Col>
                                    <MyDatePicker name="date"
                                                  onChange={inputChangeHandler}/>
                                </Col>
                            </Row>
                        </Container>
                        <Button variant="primary"
                                type="button"
                                className="mb-2"
                                onClick={onAddCompensationClicked}>
                            Add Compensation
                        </Button>
                    </Form>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}

