import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">React Bootstrap Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/option1">
          Option 1
        </Nav.Link>
        <Nav.Link as={Link} to="/option2">
          Option 2
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;