import React from 'react'
import Layout from '../../Layout/layout'
import FrontPage from '../HomePageComponents/FrontPageComponent/FrontPage'
import Team from '../HomePageComponents/TeamComponent/Team'
import Sponser from '../HomePageComponents/SponserComponent/Sponser'
import ContactUs from '../HomePageComponents/ContactUsComponent/ContactUs'

const Home = () => {
    return (
        <>
            <Layout>
                <FrontPage />
                <ContactUs />
                <Team />
                <Sponser />
            </Layout>
        </>
    )
}

export default Home