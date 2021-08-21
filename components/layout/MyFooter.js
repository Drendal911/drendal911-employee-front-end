import {Card, Col, Row, Nav} from "react-bootstrap";

export default function Footer() {
    const copy = "Copyright \u00A9 ";

    return (
        <Card className="text-center, align-items-center">
            <Card.Body>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                {copy} Aug 2021
                            </Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col xs="auto">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col xs="auto">
                        <Nav.Item>
                            <Nav.Link href="/addEmployee">Add Employee</Nav.Link>
                        </Nav.Item>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};