import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navb: React.FC = () => {

return (
<>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#mint">MINT</Nav.Link>
            <Nav.Link href="#town">TOWN</Nav.Link>
            <Nav.Link href="#status">STATUS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</>
);
}
export default Navb