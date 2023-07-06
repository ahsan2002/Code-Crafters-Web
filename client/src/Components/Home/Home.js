import React from 'react'
import Layout from '../../Layout/Layout'
import FrontPage from '../HomePageComponents/FrontPageComponent/FrontPage' 
import AboutUs from "../HomePageComponents/AboutUsComponent/AboutUs"
import AboutUsCard from '../AboutUsComponent/AboutUsCard/AboutUsCard'
import Team from '../HomePageComponents/TeamComponent/Team'
import Sponser from '../HomePageComponents/SponserComponent/Sponser'

const Home = () => {
    return (
        <>
            <Layout>
                <FrontPage />
                <AboutUs/>
                <AboutUsCard></AboutUsCard>
                <FrontPage />
                <Team/>
                <Sponser/>
            </Layout>
        </>
    )
}

export default Home