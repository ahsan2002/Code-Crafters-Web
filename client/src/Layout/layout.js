import React from 'react'
import Header from '../Components/Navbar/Header'
import Footer from '../Components/Footer/Footer'

const layout = ({ children }) => {
    return (
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}

export default layout