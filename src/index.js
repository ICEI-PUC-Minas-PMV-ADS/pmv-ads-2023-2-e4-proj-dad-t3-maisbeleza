import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Faturamento from '../src/pages/Faturamentos/faturamento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Faturamento />
  </React.StrictMode>
);

