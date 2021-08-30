import {Form, Button, Container, Row, Col, Dropdown, DropdownButton} from "react-bootstrap";
import MyDatePicker from "./layout/MyDatePicker";
import {useState} from "react";
import {isValidCompensationInput,} from "../utils/utils";
import {
    addSalaryPost,
    addAllowancePost,
    addCommissionPost,
    addBonusPost,
    addAdjustmentPost,
    editCompensation
} from "../http/dbMethods";
import MyModal from "./layout/MyModal";
import {useRouter} from "next/router";

export default function EditCompensationForm(props) {
    const router = useRouter()
    const {
        query: {
            _id,
            compType,
            amount,
            description,
            date
        },
    } = router
    const month = props.month
    const show = props.modalShow
    const setModalShow = props.setModalShow
    const modalMsg = props.modalMsg
    const setModalMsg = props.setModalMsg
    const eID = props.eID;
    const [newCompensationState, setNewCompensationState] = useState({
        _id: _id,
        compType: compType,
        amount: amount,
        description: description,
        date: date,
    });

    function inputChangeHandler(e) {
        setNewCompensationState((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    }

    async function onEditCompensationClicked(e) {
        e.preventDefault();

        const validation = isValidCompensationInput(newCompensationState);
        if (validation === "ok") {
            await editCompensation(newCompensationState).then(result => {
            setModalMsg(result);
            setModalShow(true)
        })
        } else {
            setModalMsg(validation)
            setModalShow(true)
        }
    }

    return (
        <>
            <Container className="mt-3">
                <h1 className="mb-4 text-center">Edit Compensation</h1>
                <Row>
                    <Col/>
                    <Col xs={6}>
                        <Form>
                            <Form.Group sm="true" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Compensation Type"
                                    value={newCompensationState.compType}
                                    disabled={true}
                                />
                                <Form.Text className="text-muted"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Date"
                                    name="date"
                                    value={newCompensationState.date.substring(0,10)}
                                    disabled={true}
                                />
                            </Form.Group>
                            <Form.Group sm="true" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Amount"
                                    name="amount"
                                    value={newCompensationState.amount}
                                    onChange={inputChangeHandler}
                                />
                                <Form.Text className="text-muted"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Description"
                                    name="description"
                                    value={newCompensationState.description}
                                    onChange={inputChangeHandler}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="button"
                                className="mb-2"
                                onClick={onEditCompensationClicked}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col/>
                </Row>
            </Container>
            <MyModal
                show={show}
                modalMsg={modalMsg}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}
