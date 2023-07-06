import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiAlignRight, FiX } from "react-icons/fi";
import './Navbar.css'

const Navbar = ({ isTransparent = false }) => {

    const [activeMenu, setActiveMenu] = useState()
    const location = useLocation()
    const currentUrl = location.pathname;
    // console.log(currentUrl, typeof currentUrl)

    const navLinkStyle = currentUrl == '/' ? isTransparent ? "navbar-link home-link transparentColor" : 'navbar-link home-link' : 'navbar-link home-link';
    console.log(isTransparent)
    return (
        <>
            <nav>
                <div className={activeMenu ? "navbar active" : "navbar"}>
                    <ul className="navbar-lists">
                        <li>
                            <NavLink to='/' className={navLinkStyle}
                                onClick={() => { setActiveMenu(false) }}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={navLinkStyle}
                                onClick={() => { setActiveMenu(false) }}>About</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/blogs' className={navLinkStyle}
                                onClick={() => { setActiveMenu(false) }}>Blogs</NavLink>
                        </li> */}
                        <li>
                            <NavLink to='/events' className={navLinkStyle}
                                onClick={() => { setActiveMenu(false) }}>Events</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact-us' className={navLinkStyle}
                                onClick={() => { setActiveMenu(false) }}>Contact Us</NavLink>
                        </li>
                    </ul>

                    <div className="mobile-nav--btn">
                        <FiAlignRight
                            name='mobile-outline'
                            className='mobile-nav--icon'
                            onClick={() => { setActiveMenu(true) }}
                        />
                        <FiX
                            name='close-outline'
                            className='mobile-nav--icon close-outline'
                            onClick={() => { setActiveMenu(false) }}
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar