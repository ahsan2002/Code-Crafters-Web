import React from 'react'
import Layout from '../../Layout/Layout'
import FrontPage from '../HomePageComponents/FrontPageComponent/FrontPage' 
import AboutUs from "../HomePageComponents/AboutUsComponent/AboutUs"
import Team from '../HomePageComponents/TeamComponent/Team'
import Sponser from '../HomePageComponents/SponserComponent/Sponser'
import ContactUs from '../HomePageComponents/ContactUsComponent/ContactUs'

const Home = () => {
    return (
        <>
            <Layout>
                <AboutUs/>
                <Team />
                <Sponser />
                <ContactUs />
            </Layout>
        </>
    )
}

export default Home