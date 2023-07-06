import React from 'react'
import './Sidebar.css'
import { BsPencilSquare } from "react-icons/bs";

import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <>
            <div className="sidebar-member">
                <div className='member-sidebar-div'>
                    <BsPencilSquare className='member-sidebar-icon' />
                    <h2 className='member-sidebar-heading'>Member Registration</h2>
                    <p className='member-sidebar-para'>Become the part of the RCAI LAB in NED University.</p>
                </div>
            </div>
        </>
    )
}

export default Sidebar