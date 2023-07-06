import React from "react";
import './AboutUs.css' ;




const AboutUs = () => {
  return (
    <div className="about-page">
    
      <div className="image-container">
        <img
          src="/images/about.png"
          alt="About"
          className="about-image"
        />
      </div>

      <div className="content-container">
        <h3>About Us</h3>
        <hr />
        <h2>
        Research Center for Artificial Intelligence (RCAI), is an initiative towards creating research-based environment, 
        producing professionals and high-quality engineers in the field of Information & Communication Technologies (ICT) 
        and creating ways to step in the field of innovative and cost-effective product design.
        </h2>
       
       <br/>

        <h2>
        The team has worked on variety of IoT related projects which includes smart irrigation, food quality inspection, smart home concept, 
        automatic secure entrance system, smart health care system. The lab has also worked on other projects 
        related to different technologies like satellite communication, speech processing, and image processing.
        </h2>

      </div>
    </div>
  );
};




export default AboutUs;
