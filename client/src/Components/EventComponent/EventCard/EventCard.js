import {React,useEffect} from 'react'
import './EventCard.css'
import axios from "axios";

const EventCard = ({ mainHeading, subHeading, location, date, des, position}) => {

  return (
    <>
    <ul className='event_list'>
  <li className="booking-card" style={{backgroundImage:'url(https://images.unsplash.com/photo-1578944032637-f09897c5233d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)'}}>
    <div className="book-container">
      <div className="content">
        <button className="btn">Register</button>
      </div>
    </div>
    <div className="informations-container">
      <h2 className="title">{mainHeading}</h2>
      <p className="sub-title">{subHeading}</p>
      <div className="more-information">
        <div className="info-and-date-container">
          <div className="box info">
            <svg className="icon" style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
      <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
  </svg>
            <p>N{location}</p>
          </div>
          <div className="box date">
            <svg className="icon" style={{width:'24px',height:'24px'}} viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
  </svg>
            <p>{date}</p>
          </div>
        </div>
        <p className="disclaimer">{des}</p>
        </div>
    </div>
  </li>
</ul>
    </>
  )
}

export default EventCard