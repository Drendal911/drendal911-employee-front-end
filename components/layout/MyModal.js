import {Modal, Button} from "react-bootstrap";
import {useRouter} from "next/router";

export default function MyModal(props) {
    const router = useRouter()

    function onCloseClicked() {
        props.onHide()
        router.push('/')
    }

    return (
        <>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.modalMsg}</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={onCloseClicked}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
