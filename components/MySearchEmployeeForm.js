import {Form, Button} from "react-bootstrap";
import {useState} from "react";
import {searchEmployeesPost} from "../http/dbMethods";

export default function MySearchEmployeeForm() {
    const [searchInput, setSearchInput] = useState({
        firstName: "",
        middleName: "",
        lastName: ""
    })

    function onClickHandler(e) {
        e.preventDefault()
        searchEmployeesPost(searchInput)
    }

    function inputChangeHandler(e) {
        e.preventDefault()
        setSearchInput(prevState => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text"
                              placeholder="John"
                              name="firstName"
                              onChange={inputChangeHandler}/>
                <Form.Text className="text-muted"/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="text"
                              placeholder="Micheal"
                              name="middleName"
                              onChange={inputChangeHandler}/>
                <Form.Text className="text-muted"/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"
                              placeholder="Doe"
                              name="lastName"
                              onChange={inputChangeHandler}/>
                <Form.Text className="text-muted"/>
            </Form.Group>

            <Button variant="outline-secondary">Clear</Button>{' '}
            <Button variant="primary"
                    type="button"
                    onClick={onClickHandler}>
                Search
            </Button>
        </Form>
    )
}