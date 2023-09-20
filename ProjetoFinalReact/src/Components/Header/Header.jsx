import React from 'react'
import styleHeader from './Header.module.css'
import NavBar from '../NavBar/NavBar'

const Header = () => {

  return (
    <div className={styleHeader.header}>
      <NavBar />
    </div>
  )
}

export default Header