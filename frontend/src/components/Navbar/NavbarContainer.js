import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import "./NavbarContainer.css";
function NavbarContainer() {
  const [show, setShow] = useState(false);
  const showDropdown = (event) => {
    setShow(!show);
  };
  const hideShow = (event) => {
    setShow(false);
  };
  return (
    <Navbar bg="light" expand="md" className="navbar">
      <Container>
        <Navbar.Brand href="/">ITBookShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavDropdown
            title="Category"
            id="navbar-dropdown"
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideShow}
          >
            <NavDropdown.Item href="/books">All Books</NavDropdown.Item>
            <NavDropdown.Item>Programming Languages</NavDropdown.Item>
            <NavDropdown.Item>Web Development</NavDropdown.Item>
            <NavDropdown.Item>Database</NavDropdown.Item>
            <NavDropdown.Item>Security</NavDropdown.Item>
            <NavDropdown.Item>Algorithms and data structures</NavDropdown.Item>
          </NavDropdown>
          <Form inline>
            <FormControl type="text" placeholder="Search books..." />
            <Button type="button">
              <i className="fa fa-search"></i> Search
            </Button>
          </Form>

          <Nav className="ml-auto">
            <Nav.Link href="/">
              <i className="fas fa-user"></i>
            </Nav.Link>
            <Nav.Link href="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span>(0)</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;
