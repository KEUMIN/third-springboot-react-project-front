import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function Header() {
    return(
        <div className="header">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand id='service-name' href="/">MoMu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/movie">영화</Nav.Link>
                            <Nav.Link href="/music">음악</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;