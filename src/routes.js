import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Servicos from './pages/Servicos';
import Faturamento from "./pages/Faturamento";

export default function WebRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/faturamento" element={<Faturamento />} />
            </Routes>
        </BrowserRouter>
    );
}
