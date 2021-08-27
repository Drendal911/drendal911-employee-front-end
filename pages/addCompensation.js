import AddCompensationForm from "../components/AddCompensationForm";
import {useRouter} from "next/router";

export default function AddCompensation(props) {
    const router = useRouter()
    const {
        query: {_id}
    } = router
    const eID = _id

    return (
        <AddCompensationForm
            eID={eID}
            modalShow={props.modalShow}
            setModalShow={props.setModalShow}
            modalMsg={props.modalMsg}
            setModalMsg={props.setModalMsg}
        />
    );
}
