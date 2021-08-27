import ViewCompensationForm from "../components/ViewCompensationForm";
import {useRouter} from "next/router";
import {useState} from "react";
import {Container} from "react-bootstrap";

export default function ViewCompensation(props) {
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date()
    })
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
            />
        </Container>
    )

}