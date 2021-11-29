import {Navbar, Nav, Container} from "react-bootstrap";

export default function MyNavHeader() {
    return (
        <div className="row justify-content-center">
            <Navbar bg="light" expand="lg">
                <Container className="align-items-center">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                            <Nav.Link href="/addEmployee">Add Employee</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}