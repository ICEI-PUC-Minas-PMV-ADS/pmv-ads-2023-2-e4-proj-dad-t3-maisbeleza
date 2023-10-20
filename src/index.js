import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Agenda from './pages/Agenda';
import Faturamento from './pages/Faturamentos/faturamento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Faturamento/>
  </React.StrictMode>
);

