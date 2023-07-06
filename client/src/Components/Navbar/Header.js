import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Navbar from './Navbar.js'
import './Navbar.css'
const Header = () => {

    const [isVisible, setVisible] = useState(false);

    const listenToScroll = () => {
        let heightScroll = 250; // apko kb ussy display krana woh value
        const windowScroll =
            (document.body.scrollTop || document.documentElement.scrollTop); // ap kitna scroll krchuky woh btaega
        if (windowScroll > heightScroll) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    // yeh bar bar check krrha hy ap web py kitna scroll kya ho 
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll) // yh listen krega 
        return () => window.removeEventListener('scroll', listenToScroll) // yhn py forn apki app sy scroll data dlt krdega issy load nh brhga apki app py warna bar bar scroll ky data load pr ky hang hoskta
    }, [])

    const location = useLocation()
    const currentUrl = location.pathname;

    const visibleStyle = currentUrl == '/' ? 'transparent' : ""
    console.log(visibleStyle)
    return (
        <header className={`${isVisible ? 'default-header  scroll-header' : 'default-header ' + visibleStyle}`}>
            <NavLink to={'/'}>
                {/* <h2 className='nav-heading'>RENTA</h2> */}
                <img className='logo rotateY-logo' src="/images/rcai.png" alt="" />
            </NavLink>
            <Navbar
                isTransparent={!isVisible}
            />
        </header>
    )
}

export default Header