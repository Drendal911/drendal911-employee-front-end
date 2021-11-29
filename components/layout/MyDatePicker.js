import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import Calendar from "react-date-range/dist/components/Calendar";
import {Container, Card} from "react-bootstrap";
import {useState} from "react";


export default function MyDatePicker(props) {
    const setCompensationState = props.setCompensationState
    const compensationState = props.compensationState
    const datePickerBodyText = props.datePickerBodyText
    const [dateDisplay, setDateDisplay] = useState({
        date: ''
    })

    function handleSelect(date) {
        setDateDisplay(() => { return {date: String(date)}})
        if (props.employeeState) {
            props.setEmployeeState({
                ...props.employeeState,
                birthDate: date
            })
        }
        if (compensationState) {
            setCompensationState(prevState => {
                return {
                    ...prevState,
                    date: date
                }
            })
        }
    }

    return (
        <Container>
            {!dateDisplay.date ? <Card className="align-items-center">
                <Card.Body>{datePickerBodyText}</Card.Body>
            </Card> : <Card className="align-items-center">
                <Card.Body>{String(dateDisplay.date).substring(0, 10)}</Card.Body>
            </Card>}
            {!dateDisplay.date ?
                <Calendar
                    date={new Date()}
                    maxDate={new Date()}
                    onChange={handleSelect}
                /> : <Calendar
                    date={new Date(dateDisplay.date)}
                    maxDate={new Date()}
                    onChange={handleSelect}
                />}
        </Container>
    )

}