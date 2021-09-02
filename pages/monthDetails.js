import {Container, Card, Row, Col} from "react-bootstrap";
import MyMonthDetailsCard from "../components/MyMonthDetailsCard";
import {useRouter} from "next/router";

export default function MonthDetails(props) {
    const router = useRouter()
    const monthlyTotals = props.monthlyTotals
    const {
        query: {selectedDate, id}
    } = router
    let total = 0

    const stringDate = `${selectedDate.substring(3, 7)}-${selectedDate.substring(0, 2)}`
    const filteredMonths = monthlyTotals.filter(month => month.date.includes(stringDate))
    total = filteredMonths.reduce((accumulator, month) => {
        return [...accumulator, month.amount]
    }, [])
        .reduce((accumulator, amount) => {
            return accumulator + amount
        }, 0)


    return (
        <>
            <Container className="justify-content-center text-center mt-2">
                <h1>Month Details</h1></Container>
            <Container>
                <Row>
                    <Col xs="auto">
                        <Card className="text-primary mb-2">
                            <Card.Body className="text-bold">Total: {total}</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="justify-content-center text-center">
                <MyMonthDetailsCard
                    id={id}
                    monthlyTotals={monthlyTotals}
                    selectedDate={selectedDate}
                />
            </Container>
        </>
    );
}


