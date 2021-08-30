import {Container, Button, Row, Col} from "react-bootstrap";
import MyCards from "../components/layout/MyCards";


export default function MonthlyCompensationTotals(props) {
    const monthlyTotals = props.monthlyTotals

    return (
        <Container className="text-center mb-4">
            <Container className="mt-2 mb-4">
                <h2>Monthly Compensation Totals</h2>
            </Container>
            <Container>
                <Row className="justify-content-center">
                    <Col  sm="6" >
                        <MyCards monthlyTotals={monthlyTotals}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}