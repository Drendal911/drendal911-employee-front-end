import {Card, Button} from "react-bootstrap";
import Link from 'next/link'

function DetailsCard(props) {
    const compensation = props.month
    const stringDate = props.stringDate

    return (
        <div>
            <Card className="mb-3">
                <Card.Header as="h5">{compensation.compType}</Card.Header>
                <Card.Body>
                    <Card.Title>Amount: {compensation.amount}</Card.Title>
                    <Card.Text>
                        Description: {compensation.description}
                    </Card.Text>
                    <Card.Text>
                        Date: {stringDate}
                    </Card.Text>
                    <Link
                        href={{
                            pathname: "/editCompensation",
                            query: {
                                _id: compensation._id,
                                compType: compensation.compType,
                                amount: compensation.amount,
                                description: compensation.description,
                                date: compensation.date,
                                selectedDate: props.selectedDate
                            }
                        }}>
                    <Button variant="primary">Edit Details</Button>
                    </Link>

                </Card.Body>
            </Card>
        </div>
    );
}

export default function MyMonthDetailsCard(props) {
    let monthlyTotals
    let selectedDate
    let cards

        monthlyTotals = props.monthlyTotals
        selectedDate = props.selectedDate
        const stringDate = `${props.selectedDate.substring(3, 7)}-${props.selectedDate.substring(0, 2)}`
        const updatedMonths = monthlyTotals.filter(month => month.date.includes(stringDate))
        cards = updatedMonths.map((month, _id) =>
            <DetailsCard key={_id}
                         month={month}
                         stringDate={stringDate}
                         selectedDate={selectedDate}
            />
        )

        return ( <> {cards} </> )
    }/*else {
        const month = {
            compType: "",
            amount: 0,
            description: ""
        }
        const stringDate = ""
        const selectedDate = ""

        return ( <DetailsCard
                              month={month}
                              stringDate={stringDate}
                              selectedDate={selectedDate}
        /> )
    }
}*/
