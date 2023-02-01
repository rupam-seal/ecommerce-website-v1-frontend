import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
} from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#/cart">
                <i className="fas fa-shopping-cart"></i>
                <span className="mx-2">Cart</span>
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i>
                <span className="mx-2">Login</span>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
