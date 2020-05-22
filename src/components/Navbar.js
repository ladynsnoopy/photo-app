import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
const Navigationbar = () => (
        <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="">My Photographs</Nav.Link>
            <Nav.Link href="">My Life</Nav.Link>
            <NavDropdown title="Social Media" id="basic-nav-dropdown">
                <NavDropdown.Item target="_blank" href="https://www.instagram.com/emilypugg/?hl=en">Instagram</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://www.facebook.com/myat.hmu.3/">Facebook</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/myat-hmu-khin-6730b7158/">Linked In</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>            
        </Navbar>
   
);

export default Navigationbar;