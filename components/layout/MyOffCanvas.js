import {Button, Offcanvas} from "react-bootstrap";
import {useState} from "react";
import MySearchEmployeeForm from "../MySearchEmployeeForm";


function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <Button variant="primary" onClick={toggleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Off canvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <MySearchEmployeeForm/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default function Example() {
    const options = [
        {
            name: 'Disable backdrop',
            scroll: false,
            backdrop: false,
        }
    ];

    return (
        <>
            {options.map((props, idx) => (
                <OffCanvasExample key={idx} {...props}/>
            ))}
        </>
    );
}

