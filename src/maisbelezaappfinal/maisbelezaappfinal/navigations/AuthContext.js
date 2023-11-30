// AuthContext.js

import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        'https://maisbeleza20231125193603.azurewebsites.net/api/clientes/authenticate',
        {
          email: email,
          password: password,
        }
      );

      const token = response.data.jwt;

      if (token) {
        setAuthenticated(true);
      }
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      throw new Error('Falha na autenticação');
    }
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
