import { React, useState, useEffect } from 'react'
import './Event.css'
import axios from 'axios'
import Layout from '../../Layout/Layout'

const Event = () => {
    const [events, setEvents] = useState([]);
    const [updated, setupdated] = useState([]);

    const getAllEvents = async () => {
        try {
            const response = await axios.get(`http://localhost:5001/events`)
            console.log("response: ", response.data);

            setEvents(response.data.data)

        } catch (error) {
            console.log("error in getting all products", error);
        }
    }


    useEffect(() => {
        getAllEvents();

    }, [])


    useEffect(() => {
        filterEvents('ongoing')
    }, [events])


    const filterEvents = (myEvent) => {
        console.log(myEvent)
        const updatedEvents = events.filter((elem) => {
            return elem.position === myEvent;

        });
        setupdated(updatedEvents);

        console.log(updated)
    }
    return (
        <>
            <Layout>
                <div className='container'>
                    <div className="row event-topper-div">
                        <div className=" d-flex flex-column justify-content-center col-10 col-lg-4 col-md-4 mx-auto">
                            <h2 className='Event-topper-h2'>Our Events</h2>
                            <p className='event-topper-para'>The Tech Events featured in this list take place throughout the year and cover a wide range of different industries.</p>
                        </div>
                    </div>
                </div>


                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-10 col-lg-4 col-md-4'>
                            <div className='event-nav1'>
                                <h2 onClick={() => filterEvents('previous')} className='event-nav-h2'>Previous</h2>
                                <h2 onClick={() => filterEvents('ongoing')} className='event-nav-h2'>Ongoing</h2>
                                <h2 onClick={() => filterEvents('upcoming')} className='event-nav-h2'>Upcoming</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{ marginBottom: '3.2rem' }}>
                    {
                        updated.map((event, i) => {
                            return (
                                <>
                                    <ul className='event_list'>
                                        <li className="booking-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1578944032637-f09897c5233d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)' }}>
                                            <div className="book-container">
                                                <div className="content">
                                                    <button className="btn">Register</button>
                                                </div>
                                            </div>
                                            <div className="informations-container">
                                                <h2 className="title">{event.mainHeading}</h2>
                                                <p className="sub-title">{event.subHeading}</p>
                                                <div className="more-information">
                                                    <div className="info-and-date-container">
                                                        <div className="box info">
                                                            <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                                                                <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                                            </svg>
                                                            <p>{event.location}</p>
                                                        </div>
                                                        <div className="box date">
                                                            <svg className="icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                                                                <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                                                            </svg>
                                                            <p>{event.date}</p>
                                                        </div>
                                                    </div>
                                                    <p className="disclaimer">{event.des}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </>
                            )
                        })
                    }
                    {/* <EventCard/> */}
                </div>



            </Layout>
        </>
    )
}

export default Event







