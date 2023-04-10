import React from 'react'

import {Nav, Form,Button, Container, Navbar} from "react-bootstrap"

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Home 🛍</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/cart">
                <i className="fa-solid fa-cart-shopping"></i>Cart
                </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i>Login
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default Header