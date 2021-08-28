import {Container, Button} from "react-bootstrap";
import MyCards from "../components/layout/MyCards";


export default function MonthlyCompensationTotals(props) {
    const monthlyTotals = props.monthlyTotals

    function onClickHandler(e) {
        console.log(monthlyTotals)
    }

    return (
        <Container className="text-center">
            <Container className="mt-2 mb-4">
                <h1>Monthly Compensation Totals</h1>
            </Container>

            <MyCards monthlyTotals={monthlyTotals}/>
            <Button className="mt-3 mb-3" onClick={onClickHandler}>Button</Button>
        </Container>
    );
}

//