import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

function HeadNav() {
  return (
    <Navbar className='nav' bg="light" expand="lg">
  <Container className='nav-container'>
    <Navbar.Brand href="#home">Company Name</Navbar.Brand>
  </Container>
</Navbar>
  )
}

export default HeadNav