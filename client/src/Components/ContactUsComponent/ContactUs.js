import {React,useState,useEffect} from 'react'
import ContactUsCard from './ContactUsCard/ContactUsCard'
// import layout from '../../Layout/Layout'
import Layout from '../../Layout/Layout'
import './ContactUs.css'

const ContactUs = () => {
  const [events, setEvents] = useState('');

    useEffect(() => {
        setEvents('contact-us')
    }, [])


    
  return (
    <Layout>
      <ContactUsCard/>

      
      <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-10 col-lg-4 col-md-4'>
                        <div className='event-nav'>
                            <h2 onClick={() => setEvents('contact-us')} className='event-nav-h2'>Contact Us</h2>
                            <h2 onClick={() => setEvents('sponser-us')} className='event-nav-h2'>Sponser Us</h2>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='contactUsContainer1'>
            <div id='contactus'>
            <div className='headings'>
                    <div className='heading3'>
                        {events == 'contact-us' ? 'CONTACT US' : 'SPONSOR US'}
                    </div>
                </div>

                {/* The Form And Contact Information */}
                <div className='content1'>
                    <form action="">
                        {/* contact form */}
                        <div className='mainForm'>

                            {/* First Name */}
                            <div className='form-group col-half'>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    placeholder='First Name'
                                    className='form-control'
                                />
                            </div>

                            {/* Lasr Name */}
                            <div className='form-group col-half'>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    placeholder='Last Name'
                                    className='form-control'
                                />
                            </div>

                            {/* Email */}
                            <div className='form-group col-half'>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='E-Mail'
                                    className='form-control'
                                />
                            </div>

                          {
                            events == 'sponser-us' &&
                            <div className='form-group col-half'>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    placeholder='Company'
                                    className='form-control'
                                />
                            </div>
                          }

                            {/* Message */}
                            {
                              events == 'contact-us' &&
                            <div className='form-group col-full'>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="50"
                                    placeholder='Message'
                                    className='form-control'
                                >

                                </textarea>
                            </div>

                            }

                            <button
                                type='submit'
                                className='contactUsSubmit'
                            >
                                Submit
                            </button>


                        </div>

                    </form>
                </div>



            </div>
        </div>



    </Layout>
  )
}

export default ContactUs







