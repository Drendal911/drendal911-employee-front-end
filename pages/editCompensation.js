import {useRouter} from "next/router";
import EditCompensationForm from "../components/EditCompensationForm";

export default function EditCompensation(props) {
    const router = useRouter()
    const {
        query: {_id}
    } = router

    return (
        <EditCompensationForm
            _id={_id}
            modalShow={props.modalShow}
            setModalShow={props.setModalShow}
            modalMsg={props.modalMsg}
            setModalMsg={props.setModalMsg}
            month={props.month}
        />
    );
}