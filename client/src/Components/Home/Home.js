import React from 'react'
import Layout from '../../Layout/layout'
import FrontPage from '../HomePageComponents/FrontPageComponent/FrontPage' 
import AboutUs from "../HomePageComponents/AboutUsComponent/AboutUs"
import AboutUsCard from '../AboutUsComponent/AboutUsCard/AboutUsCard'

const Home = () => {
    return (
        <>
            <Layout>
                <FrontPage />
                <AboutUs/>
                <AboutUsCard></AboutUsCard>
            </Layout>
        </>
    )
}

export default Home