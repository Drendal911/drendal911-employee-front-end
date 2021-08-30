import Link from "next/link";
import {Button, Card, Container} from "react-bootstrap";
import {findMonthlyTotals} from "../../utils/utils";

function MyCard(props) {
    const monthlyTotals = props.monthlyTotals
    const month = props.month

    return (
        <Card className="mt-2">
            <Card.Body>
                <Container className="mb-2">
                    <Card.Title>Month: {month.date}</Card.Title>
                    <div>Total: {month.amount}</div>
                </Container>
                <Link
                    href={{
                        pathname: "/monthDetails",
                        query: {
                            id: month._id,
                            selectedDate: month.date
                        }
                    }}>
                    <Button variant="primary" className="me-1 mb-1"
                    >View Details</Button>
                </Link>
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

    if (monthlyTotals.length === 0) {
        return (
            <Card>
                <Card.Body>No results found.</Card.Body>
            </Card>
        )
    }
    if (monthlyTotals.length === 1) {
        const updatedDate = monthlyTotals[0].date.substring(5, 7) + " " + monthlyTotals[0].date.substring(0, 4)
        const month = {
            _id: monthlyTotals[0]._id,
            amount: monthlyTotals[0].amount,
            compType: monthlyTotals[0].compType,
            date: updatedDate,
            description: monthlyTotals[0].description
        }
        return (
            <MyCard
                month={month}
                monthlyTotals={monthlyTotals}/>
        )
    }
    return (
        <>{cards}</>
    );
}
