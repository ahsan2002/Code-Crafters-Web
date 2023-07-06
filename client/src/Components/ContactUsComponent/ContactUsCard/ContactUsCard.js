import React from "react";
import "./ContactUsCard.css";
import { IoLocationSharp, IoPhonePortrait, IoMailSharp } from "react-icons/io5";
// import Fade from 'react-reveal/Fade';


const ContactUsCard = ({ loc }) => {
    const data = [
        {
            img: <IoLocationSharp size={40} />,
            heading: 'Address',
            description: "1st Floor Smart City Lab - HPCC Building"

        },
        {
            img: <IoPhonePortrait size={40} />,
            heading: 'Phone',
            description: "0318-2936379"

        },
        {
            img: <IoMailSharp size={40} />,
            heading: 'Email Address',
            description: "rcai_lab@cloud.neduet.edu.pk"

        }
    ]
    return (
      <>
           {/* <Fade top> */}
          <div className="contact_card_main">
              {
                  data.map((elem) => {
                      return (
                          <div class="card-contact">
                              {elem.img}
                              <h2>
                                  {elem.heading}
                              </h2>
                              <p>
                                  {elem.description}
                              </p>
                          </div>
                      )
                  })
              }
          </div>

           {/* </Fade> */}
      </>
  )
};

export default ContactUsCard;