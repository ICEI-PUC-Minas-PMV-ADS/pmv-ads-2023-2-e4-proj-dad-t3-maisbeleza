import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Primeira from '../assets/img/3.jpg';
import Segunda from '../assets/img/2.jpg';
import Terceira from '../assets/img/1.jpg';
import '../App.css';


function Features() {
    return (
      <Container fluid>
      <Row className="justify-content-center">
          <Col xs={10} sm={6} md={4} lg={3} className="feature-col">
              <Image src={Primeira} className="feature-image" thumbnail />
              <p className="feature-text">Administre o seu negócio</p>
          </Col>
          <Col xs={10} sm={6} md={4} lg={3} className="feature-col">
              <Image src={Segunda} className="feature-image" thumbnail />
              <p className="feature-text">Cadastre serviços</p>
          </Col>
          <Col xs={10} sm={6} md={4} lg={3} className="feature-col">
              <Image src={Terceira} className="feature-image" thumbnail />
              <p className="feature-text">Organize a sua agenda</p>
          </Col>
      </Row>
  </Container>
    );
  }

export default Features;