import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (

        <div className='contactUsContainer'>
            <div id='contactus'>
                {/* The Headings At the Start */}
                <div className='headings'>
                    <div className='heading1'>
                        HAVE ANY QUERIES?
                    </div>
                    <div className='heading2'>
                        CONTACT US
                    </div>
                </div>

                {/* The Form And Contact Information */}
                <div className='content'>


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

                            {/* Message */}
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
    );
}

export default ContactUs;