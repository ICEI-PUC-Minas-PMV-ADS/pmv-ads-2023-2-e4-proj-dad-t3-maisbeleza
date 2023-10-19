import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Logo from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';

function Menu() {


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-blueviolet">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">Mais Beleza</Navbar.Brand>
        <Image className="logo" src={Logo} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">Início</Nav.Link>
            <Nav.Link as={Link} to="/agenda" className="text-white">Agenda</Nav.Link>
            <Nav.Link as={Link} to="/servicos" className="text-white">Serviços</Nav.Link>
            <Nav.Link as={Link} to="/faturamento" className="text-white">Faturamento</Nav.Link>
            <Nav.Link as={Link} to="/cadastro" className="text-white">Cadastro</Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
