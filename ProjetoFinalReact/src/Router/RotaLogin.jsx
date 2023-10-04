import React from 'react'
import Login from '../Components/Login/Login'
import Cadastro from '../Components/Login/Cadastro'
import RecuperarSenha from '../Components/Login/RecuperarSenha'
import ResetarSenha from '../Components/Login/ResetarSenha'
import { NotFound } from '../NotFound'
import { Route, Routes } from 'react-router-dom'

const RotaLogin = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="criar" element={<Cadastro/>}/>
          <Route path="Perdeu_Senha" element={<RecuperarSenha/>}/>
          <Route path='resetar' element={<ResetarSenha/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default RotaLogin