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
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
            navbarScroll
          >
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#mint">MINT</Nav.Link>
            <Nav.Link href="#town">TOWN</Nav.Link>
            <Nav.Link href="#status">STATUS</Nav.Link>
          </Nav>
          <li className="nav-item">
            <span className="navbar-text blood-text">300.12 $BLOOD</span>
         </li>
          <form className="form-inline">
            <button className="btn btn-primary" type="button">Log in</button>
        </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
);
}
export default Navb