import {Button, Card, Row, Col, Container} from "react-bootstrap";
import MyDateRangePicker from "./layout/MyDateRangePicker";
import {searchCompensation} from "../http/dbMethods"
import {adjustEndDate, adjustStartDate, findMonthlyTotals} from "../utils/utils";
import {useRouter} from "next/router";

export default function ViewCompensationForm(props) {
    const router = useRouter()
    const monthlyTotals = props.monthlyTotals
    const setMonthlyTotals = props.setMonthlyTotals
    const modalShow = props.modalShow
    const setModalShow = props.setModalShow
    const modalMsg = props.modalMsg
    const setModalMsg = props.setModalMsg
    const dateRange = props.dateRange
    const setDateRange = props.setDateRange

    async function onClickHandler(e) {
        const compensation = {
            eID: props.eID,
            startDate: adjustStartDate(dateRange.startDate),
            endDate: adjustEndDate(dateRange.endDate)
        }
        const search = await searchCompensation(compensation)

        setMonthlyTotals(search)
        await router.push('/monthlyCompensationTotals')
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