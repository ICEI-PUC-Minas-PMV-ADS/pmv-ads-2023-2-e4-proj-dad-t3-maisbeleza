import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import Menu from './components/Navbar';
import Frase from './components/Frase';
import CadastroServicos from './pages/CadastroServicos/servicos'


const App = () => {
  return (
    <div className="App">
      <Menu />
      <CadastroServicos/>
      {/* <Header />
      <Frase />
      <Features /> */}
      <Footer />
    </div>
  );
};

export default App;

