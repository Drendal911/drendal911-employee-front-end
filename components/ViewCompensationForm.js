import {Button, Card, Row, Col, Container} from "react-bootstrap";
import MyDateRangePicker from "./layout/MyDateRangePicker";

export default function ViewCompensationForm(props) {
    const eID = props.eID
    const modalShow = props.modalShow
    const setModalShow = props.setModalShow
    const modalMsg = props.modalMsg
    const setModalMsg = props.setModalMsg
    const dateRange = props.dateRange
    const setDateRange = props.setDateRange

    function onClickHandler(e) {
        console.log(dateRange)
    }

    return (
        <Container className="mt-3 mb-3">
            <Row className="mb-3">
                <Col/>
                <Col xs={6}>
                    <h1 className="text-center mb-4">View Compensation</h1>
                    <Card className="text-center">
                        <h4>Choose Date Range</h4>
                        <MyDateRangePicker
                            dateRange={dateRange}
                            setDateRange={setDateRange}
                        />
                    </Card>
                    <Button className="mt-3" variant="primary"
                            onClick={onClickHandler}
                    >Accept Dates</Button>
                </Col>
                <Col/>

            </Row>
        </Container>
    )
}