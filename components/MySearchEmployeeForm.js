import {Form, Button, FormLabel} from "react-bootstrap";
import {useState, useRef} from "react";
import {searchEmployeesPost} from "../http/dbMethods";
import MyEmployeeDetailsCard from "./EmployeeDetailsCard";
import {capitalizeString} from "../utils/utils";

export default function MySearchEmployeeForm(props) {
    const firstNameRef = useRef("")
    const lastNameRef = useRef("")
    const middleNameRef = useRef("")
    let [searchResult, setSearchResult] = useState([])
    const [searchInput, setSearchInput] = useState({
        firstName: "",
        middleName: "",
        lastName: ""
    })

    function onClearHandler() {
        firstNameRef.current = ""
        setSearchInput({
            firstName: "",
            middleName: "",
            lastName: ""
        })
        setSearchResult([])
    }

    function onClickHandler(e) {
        if (searchInput.firstName) searchInput.firstName = capitalizeString(searchInput.firstName)
        if (searchInput.middleName) searchInput.middleName = capitalizeString(searchInput.middleName)
        if (searchInput.lastName) searchInput.lastName = capitalizeString(searchInput.lastName)

        searchEmployeesPost(searchInput).then(result => {
            if (result.length === 0) {
                setSearchResult(["0 results found."])
            } else {
                setSearchResult(result)
            }
        })
    }

    function inputChangeHandler(e) {
        setSearchInput(prevState => { return {...prevState, [e.target.name]: e.target.value} })
    }

    return (
        <Form>
            <Form.Group className="mb-2">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="input"
                              placeholder="John"
                              name="firstName"
                              value={searchInput.firstName}
                              ref={firstNameRef}
                              onChange={inputChangeHandler}/>
                <Form.Text className="text-muted"/>
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control type="input"
                              placeholder="Micheal"
                              name="middleName"
                              value={searchInput.middleName}
                              ref={middleNameRef}
                              onChange={inputChangeHandler}/>
                <Form.Text className="text-muted"/>
            </Form.Group>

            <Form.Group className="mb-1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="input"
                              placeholder="Doe"
                              name="lastName"
                              value={searchInput.lastName}
                              ref={lastNameRef}
                              onChange={inputChangeHandler}/>
                <Form.Text className="text-muted"/>
            </Form.Group>
            <FormLabel className="mb-3">(Use any combination of first, middle, or last name)</FormLabel>

            <Button variant="outline-secondary"
                    onClick={onClearHandler}>
                Clear
            </Button>{' '}
            <Button variant="primary"
                    type="button"
                    onClick={onClickHandler}>
                Search
            </Button>
            <MyEmployeeDetailsCard
                searchResult={searchResult}
            />
        </Form>
    )
}