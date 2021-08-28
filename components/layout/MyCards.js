import {Card, Container} from "react-bootstrap";
import {findMonthlyTotals} from "../../utils/utils";

function MyCard(props) {
    const monthlyTotals = props.monthlyTotals
    const month = props.month

    return (
        <Card className="mt-2">
            <Card.Body>
                <Container>
                    <Card.Title>Month: {month.date}</Card.Title>
                    Total: {month.amount}
                </Container>
            </Card.Body>
        </Card>
    );
}


export default function MyCards(props) {
    const monthlyTotals = props.monthlyTotals
    const update = findMonthlyTotals(monthlyTotals)

    const cards = update.map((month, _id) =>
        <MyCard key={_id}
                month={month}
                monthlyTotals={monthlyTotals}/>
    )

    return (
        <>{cards}</>
    );
}
