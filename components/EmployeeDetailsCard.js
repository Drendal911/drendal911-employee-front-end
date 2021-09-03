import Link from "next/link";
import {Button, Card} from "react-bootstrap";
import {deleteEmployeesByIdPost} from "../http/dbMethods";
import {useRouter} from "next/router";

function EmployeeDetailsCard(props) {
    const router = useRouter()
    const employee = props.employee

    function onDeleteEmployeeClicked() {
        deleteEmployeesByIdPost(employee._id).then(() => {
            router.reload()
        })
    }

    return (
        employee.birthDate === undefined ?
            <Card className="mt-3">
                <Card.Header>No results found</Card.Header>
                <Card.Body>
                    <Card.Title>Your search returned 0 results.</Card.Title>
                </Card.Body>
            </Card> :
            <Card className="mt-3">
                <Card.Header>ID: {employee._id}</Card.Header>
                <Card.Body>
                    <Card.Title>{employee.firstName} {employee.middleName} {employee.lastName}</Card.Title>
                    <div className="mb-2">
                        <div>Position: {employee.position}</div>
                        <div>Birth Date: {employee.birthDate.substring(0, 10)}</div>
                    </div>
                    <Link
                        href={{
                            pathname: "/addCompensation",
                            query: {
                                _id: employee._id
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
                                _id: employee._id
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
                                _id: employee._id,
                                firstName: employee.firstName,
                                middleName: employee.middleName,
                                lastName: employee.lastName,
                                position: employee.position,
                                birthDate: employee.birthDate,
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
                </Card.Body>
            </Card>
    )
}

export default function MyEmployeeDetailsCard(props) {
    try {
        const cards = props.searchResult.map((employee, _id) =>
            <EmployeeDetailsCard key={_id}
                                 searchResult={props.searchResult}
                                 employee={employee}/>)
        return (
            <>{cards}</>
        )
    } catch (e) {
        const employee = { birthDate: undefined }
        return (
            <EmployeeDetailsCard employee={employee}/>
        )
    }
}

