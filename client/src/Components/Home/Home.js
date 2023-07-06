import React from 'react'
import Layout from '../../Layout/layout'
import FrontPage from '../HomePageComponents/FrontPageComponent/FrontPage'
import ContactUs from '../HomePageComponents/ContactUsComponent/ContactUs'

const Home = () => {
    return (
        <>
            <Layout>
                <FrontPage />
                <ContactUs />
            </Layout>
        </>
    )
}

export default Home