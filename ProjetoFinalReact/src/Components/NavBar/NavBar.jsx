import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs } from '../../Assets/dogs.svg' 
import styleNavBar from './NavBar.module.css'


const NavBar = () => {
  return (
    <nav className='container _flex _justify-between _items-center _h-[4rem]'>
        <Link to="/" className={styleNavBar.logo} aria-label='Dogs - Home'><Dogs/></Link>
        <Link to="/login" className={styleNavBar.login}>Login / Criar</Link>
    </nav>
  )
}

export default NavBar