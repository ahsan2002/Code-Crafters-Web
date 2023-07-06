import {React,useState} from 'react'
import ContactUsCard from './ContactUsCard/ContactUsCard'
// import layout from '../../Layout/Layout'
import Layout from '../../Layout/Layout'
import './ContactUs.css'

const ContactUs = () => {
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
    <Layout>
      <ContactUsCard/>

      <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-10 col-lg-4 col-md-4'>
                        <div className='event-nav'>
                            <h2 onClick={() => console.log('previous')} className='event-nav-h2'>Contact Us</h2>
                            <h2 onClick={() => console.log('present')} className='event-nav-h2'>Sponser Us</h2>
                        </div>
                    </div>
                </div>
            </div>
      



    </Layout>
  )
}

export default ContactUs







