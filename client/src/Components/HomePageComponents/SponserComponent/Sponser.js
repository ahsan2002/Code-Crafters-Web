import React from 'react'
import { NavLink } from 'react-router-dom'

import './Sponser.css'

const Sponser = () => {
  return (
    <div className='sponser_main'>
        <div>
        <h3>PARTNERS & SPONSORS</h3>
        <h1>OFFICIAL SPONSORS</h1>
        </div>

        <div className='sponser_inner'>
            <div>
                <img src='/images/Ai-Fest.png'></img>
            </div>
            <div>
                <img src='/images/AIC-logo.png'></img>
            </div>
            <div>
                <img src='/images/ncai-logo.png'></img>
            </div>
            <div>
                <img src='/images/SC-logo.png'></img>
            </div>
        </div>

        <NavLink to='/member-registration'>
                            <div className="justify-content-center align-items-center d-flex">
                                <button
                                    type="button"
                                    className="my_sponser_btn btn px-4"
                                    style={{ borderRadius: "30px" }}
                                >Become Our Sponser
                                </button>
                            </div>
                        </NavLink>


    </div>
  )
}

export default Sponser