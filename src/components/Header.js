import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="banner">
      <div className="banner-content">
        <h1>Sua jornada de transformação começa aqui!</h1>
        <p class="text-white">Faça parte dessa comunidade vibrante de profissionais da beleza determinados a conquistar seu espaço! Registre-se agora mesmo e dê o primeiro passo em direção a um futuro de sucesso, independência e empoderamento!</p>
        <Button variant="outline-light">Cadastre-se!</Button>{' '}
      </div>
    </header>
  );
};

export default Header;
