import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import Calendar from "react-date-range/dist/components/Calendar";
import {Container, Card} from "react-bootstrap";


export default function MyDatePicker(props) {

    function handleSelect(date) {
        props.setEmployeeState({
            ...props.employeeState,
            birthDate: date
        })
        console.log(props.employeeState)
    }

    return (
        <Container>
            <Card className="align-items-center">
                <Card.Body>Birth Date</Card.Body>
            </Card>
            {!props.employeeState.birthDate ?
                <Calendar
                date={new Date()}
                maxDate={new Date()}
                onChange={handleSelect}
            /> : <Calendar
                    date={props.employeeState.birthDate}
                    maxDate={new Date()}
                    onChange={handleSelect}
                /> }
        </Container>
    )

}