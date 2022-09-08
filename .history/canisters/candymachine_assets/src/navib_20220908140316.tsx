import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

const Navb: React.FC = () => {

return (
<>
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#mint">MINT</Nav.Link>
            <Nav.Link href="#town">TOWN</Nav.Link>
            <Nav.Link href="#status">STATUS</Nav.Link>
          </Nav>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="" data-bs-target="#myModal" data-bs-toggle="modal">About</a>
                </li>
            </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
);
}
export default Navb