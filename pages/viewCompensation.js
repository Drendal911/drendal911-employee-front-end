import ViewCompensationForm from "../components/ViewCompensationForm";
import {useRouter} from "next/router";
import {useState} from "react";
import {Container} from "react-bootstrap";

export default function ViewCompensation(props) {
    const dateRange = props.dateRange
    const setDateRange = props.setDateRange
    const router = useRouter()
    const {
        query: {_id}
    } = router
    const eID = _id

    return (
        <Container>
            <ViewCompensationForm
                eID={eID}
                modalShow={props.modalShow}
                setModalShow={props.setModalShow}
                modalMsg={props.modalMsg}
                setModalMsg={props.setModalMsg}
                dateRange={dateRange}
                setDateRange={setDateRange}
                monthlyTotals={props.monthlyTotals}
                setMonthlyTotals={props.setMonthlyTotals}
            />
        </Container>
    )

}