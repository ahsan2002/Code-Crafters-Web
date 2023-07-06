import React from 'react'
import Header from '../Components/Navbar/Header'
import Footer from '../Components/Footer/Footer'
import BottomToTop from '../Components/BottomToTop/BottomToTop'
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'

const Layout = ({ children }) => {
    return (
        <>
        <Header/>
        <ScrollToTop />
        {children}
        <BottomToTop />
        <Footer/>
        </>
    )
}

export default Layout