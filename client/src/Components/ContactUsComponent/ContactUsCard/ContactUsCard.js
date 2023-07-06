import React from "react";
import "./ContactUsCard.css";
import { IoLocationSharp, IoPhonePortrait, IoMailSharp } from "react-icons/io5";
// import Fade from 'react-reveal/Fade';


const ContactUsCard = ({ loc }) => {
    const data = [
        {
            img: <IoLocationSharp size={50} />,
            heading: 'Address',
            description: "1st Floor Smart City Lab - HPCC Building"

        },
        {
            img: <IoPhonePortrait size={50} />,
            heading: 'Phone',
            description: "0318-2936379"

        },
        {
            img: <IoMailSharp size={50} />,
            heading: 'Email Address',
            description: "rcai_lab@gmail.com"

        }
    ]
  return (
    <>
    {/* <Fade right> */}
      <div className="event-page-info">
        {data.map((elem, i) => (
          <div className="event-page-info-data">

            {elem.img}
            <div>
              <h4 className="event-page-info-h4">{elem.heading}</h4>
              <p className="event-page-info-p">{elem.description}</p>
            </div>

          </div>
        ))}
      </div>
      {/* </Fade> */}
    </>
  );
};

export default ContactUsCard;