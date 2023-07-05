import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar.js'
import './Navbar.css'
const Header = () => {

    return (
        <header className={'default-header'}>
        <NavLink to={'/'}>
                {/* <h2 className='nav-heading'>RENTA</h2> */}
                <img className='logo rotateY-logo' src="/images/rcai.png" alt="" />
            </NavLink>
            <Navbar />
        </header>
    )
}

export default Header