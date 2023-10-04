import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RotaLogin from './RotaLogin'
import RotaTelaPrincipal from './RotaTelaPrincipal'


const Rotas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RotaTelaPrincipal />} />
                    <Route path="/login" element={<RotaLogin />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rotas