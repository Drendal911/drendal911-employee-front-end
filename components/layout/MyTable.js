import {Table} from "react-bootstrap";

export default function MyTable(props) {
    const employeeList = props.employeeList
    const rows = employeeList.map((employee, _id) =>
        <tr
            key={_id}>
            <td>{employee._id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.middleName}</td>
            <td>{employee.lastName}</td>
        </tr>
    )

    return (
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
    );
};

