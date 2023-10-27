import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Logo from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import  { useState, useEffect } from 'react';

function Menu() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar se o usuário está logado quando o componente é montado
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Limpar o token de autenticação do localStorage
    localStorage.removeItem('authToken');
    // Redirecionar o usuário para a página de login
    window.location.href = '/login';
    setIsLoggedIn(false);
  };


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
            <Nav.Link as={Link} to="/perfil" className="text-white">Perfil</Nav.Link>

            {/* Condicional para exibir ou ocultar as opções de cadastro e login */}
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/" className="text-white" onClick={handleLogout}>
                  Sair
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/cadastro" className="text-white">Cadastro</Nav.Link>
                <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
