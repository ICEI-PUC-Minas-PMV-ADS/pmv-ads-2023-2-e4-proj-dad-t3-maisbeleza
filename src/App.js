import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import Menu from './components/Navbar';
import Frase from './components/Frase';
import Servicos from './pages/Servicos'


const App = () => {
  return (
    <div className="App">
      <Menu />
      <Servicos/>
      {/* <Header />
      <Frase />
      <Features /> */}
      <Footer />
    </div>
  );
};

export default App;

