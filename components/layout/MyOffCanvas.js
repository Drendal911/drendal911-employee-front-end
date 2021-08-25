import {Button, Offcanvas} from "react-bootstrap";
import {useEffect, useState} from "react";
import MySearchEmployeeForm from "../MySearchEmployeeForm";


function OffCanvas({name, ...props}) {
    const [showSearch, setShowSearch] = useState(false);
    const searchResult = []

    const handleClose = () => setShowSearch(false);
    const toggleShow = () => setShowSearch((s) => !s)


    return (
        <>
            <Button variant="primary" onClick={toggleShow} className="me-2, mb-3">
                {name}
            </Button>
            <Offcanvas show={showSearch} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Off canvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <MySearchEmployeeForm
                        searchResult={searchResult}
                    />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default function MyOffCanvas(props) {

    const options = [
        {
            name: 'Search',
            scroll: true,
            backdrop: false,
        }
    ];

    return (
        <>
            {options.map((props, idx) => (
                <OffCanvas key={idx} {...props}
                />
            ))}
        </>
    );
}

