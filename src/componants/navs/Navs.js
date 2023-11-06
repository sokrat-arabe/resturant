import React from 'react';
import './Navs.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './../../assets/logo.png';
const Navs = () => {
  return (
    <Navbar expend="lg">
      <Container>
        <Navbar.Brand href="#home" className='logo1'>
        <img src={logo} title="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">about us</Nav.Link>
            <Nav.Link href="#pricing">explore food</Nav.Link>
            <Nav.Link href="#home">review</Nav.Link>
            <Nav.Link href="#home">faq</Nav.Link>
            <Nav.Link id='last-nav'>21212</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
