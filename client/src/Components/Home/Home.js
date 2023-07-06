import React from 'react'
import Layout from '../../Layout/Layout'
// import FrontPage from '../HomePageComponents/FrontPageComponent/FrontPage' 
import FrontPage from '../HomePageComponents/FrontPageComponent/FrontPage'
import AboutUs from "../HomePageComponents/AboutUsComponent/AboutUs"
import Team from '../HomePageComponents/TeamComponent/Team'
import Sponser from '../HomePageComponents/SponserComponent/Sponser'
import ContactUs from '../HomePageComponents/ContactUsComponent/ContactUs'
import MemberRegistration from '../MemberRegistration/MemberRegistration'



const Home = () => {
    return (
        <>
            <Layout>
                <FrontPage />
                <AboutUs />
                <Team />
                <Sponser />
                <ContactUs />


               <MemberRegistration/>


            </Layout>
        </>
    )
}

export default Home