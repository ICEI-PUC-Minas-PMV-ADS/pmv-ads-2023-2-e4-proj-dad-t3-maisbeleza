import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Logo from '../assets/img/Logo.png';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-blueviolet">
      <Container>
        <Navbar.Brand href="#home" className="text-white">Mais Beleza</Navbar.Brand>
        <Image className="logo" src={Logo} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white">Início</Nav.Link>
            <Nav.Link href="#features" className="text-white">Sobre</Nav.Link>
            <Nav.Link href="#cadastro" className="text-white">Cadastro</Nav.Link>
            <Nav.Link href="#login" className="text-white">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;