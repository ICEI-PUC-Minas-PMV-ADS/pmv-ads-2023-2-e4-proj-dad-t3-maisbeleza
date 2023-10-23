import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Servicos from './pages/Servicos';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Cadastro from './pages/Cadastro'
import Faturamento from "./pages/Faturamento";


export default function WebRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/faturamento" element={<Faturamento />} />
            </Routes>
        </BrowserRouter>
    );
}
