import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PlugWallet from './plug-wallet';
import ListGroup from 'react-bootstrap/ListGroup';

const Navb: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <button className="btn btn-primary" type="button"  onClick={handleShow}>Log in</button>
        </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
              <ListGroup.Item>
                        <PlugWallet></PlugWallet>
              </ListGroup.Item>
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</>
);
}
export default Navb