import React from 'react'
import './Event.css'
// import EventCalender from '../EventCalender/EventCalender'
import Layout from '../../Layout/Layout'
import EventCard from './EventCard/EventCard'

const Event = () => {
    // const [events, setEvents] = useState(eventData);

    // useEffect(() => {
    //     filterEvents('present')
    // }, [])


    // const filterEvents = (myEvent) => {
    //     const updatedEvents = eventData.filter((elem) => {
    //         return elem.eventMode === myEvent;

    //     });
    //     setEvents(updatedEvents);
    // }
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
                            <h2 onClick={() => console.log('previous')} className='event-nav-h2'>Previous</h2>
                            <h2 onClick={() => console.log('present')} className='event-nav-h2'>Ongoing</h2>
                            <h2 onClick={() => console.log('upcoming')} className='event-nav-h2'>Upcoming</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container' style={{ marginBottom: '3.2rem' }}>
                {/* {
                    events.map((event, i) => {
                        return (
                            <EventCard {...event} key={i} />
                        )
                    })
                } */}
            <EventCard/>
            </div>



        </Layout>
        </>
    )
}

export default Event







