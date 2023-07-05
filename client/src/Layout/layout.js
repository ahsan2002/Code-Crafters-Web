import React from 'react'
import Header from '../Components/Navbar/Header'

const layout = ({ children }) => {
    return (
        <>
        <Header/>
        {children}
        </>
    )
}

export default layout