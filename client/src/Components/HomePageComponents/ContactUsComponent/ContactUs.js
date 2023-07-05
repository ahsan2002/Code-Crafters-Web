import React from 'react';

const ContactUs = () => {
    return (
        <div id='contactus'>

            {/* The Headings At the Start */}
            <div className='headings'>
                <div className='heading1'>
                    Have Any Queries?
                </div>
                <div className='heading2'>
                    Contact Us
                </div>
            </div>

            {/* The Form And Contact Information */}
            <div className='content'>

                {/* the contact info */}
                <div>
                    {/* Address */}
                    <div>
                        <div>Address:</div>
                        <div>184 Main Collins Street</div>
                    </div>


                    {/* Phone */}
                    <div>
                        <div>Phone:</div>

                        <div>(226) 446 9371</div>
                    </div>


                    {/* EMail */}
                    <div>
                        <div>
                            Email:
                        </div>
                        <div>
                            rcai@gmail.com
                        </div>
                    </div>


                    {/* Website */}
                    <div>
                        <div>Website:</div>
                        <div>rcai.pk</div>
                    </div>

                </div>

                {/* contact form */}
                <div>

                </div>


            </div>

        </div>
    );
}

export default ContactUs;