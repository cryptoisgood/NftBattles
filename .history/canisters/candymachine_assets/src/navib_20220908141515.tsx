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
        <Navbar.Collapse>
          <Nav
            className="me-auto"
          >
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#mint">MINT</Nav.Link>
            <Nav.Link href="#town">TOWN</Nav.Link>
            <Nav.Link href="#status">STATUS</Nav.Link>
          </Nav>
          <li className="nav-item">
            <span className="navbar-text balance">300.12 $BLOOD</span>
         </li>
          <form className="form-inline">
            <button className="btn btn-outline-success" type="button">Log in</button>
        </form>
        </Navbar.Collapse>

      </Container>
    </Navbar>
</>
);
}
export default Navb