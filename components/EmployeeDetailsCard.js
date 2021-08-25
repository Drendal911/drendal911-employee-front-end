import Link from "next/link";
import {Button, Card} from "react-bootstrap";


function EmployeeDetailsCard(props) {
    const searchResult = props.searchResult
    const employee = props.employee

    function onClickHandler(e) {
        //console.log(employee)
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
                        <div>Birth Date: {employee.birthDate}</div>
                    </div>
                    <Button variant="primary"
                            onClick={onClickHandler}
                    >Test Button</Button>
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
                    <Button variant="primary" className="ms-2"
                            onClick={onClickHandler}
                    >Edit Employee</Button>
                    </Link>

                </Card.Body>
            </Card>
    )
}

export default function MyEmployeeDetailsCard({searchResult}) {
    const cards = searchResult.map((employee, _id) => <EmployeeDetailsCard key={_id} searchResult={searchResult}
                                                                           employee={employee}/>)
    return (
        <>{cards}</>
    )

}
