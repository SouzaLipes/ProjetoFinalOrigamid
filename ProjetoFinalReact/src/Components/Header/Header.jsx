import React from 'react'
import styleHeader from './Header.module.css'
import NavBar from '../NavBar/NavBar'

const Header = () => {

  return (
    <header className='_shadow-[0px_1px_1px_rgba(0,0,0,0.1)] _fixed _px-2 py-0 _w-full _z[100] _top-0'>
      <NavBar />
    </header>
  )
}

export default Header