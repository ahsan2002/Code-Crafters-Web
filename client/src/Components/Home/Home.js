import React from 'react'
import Layout from '../../Layout/layout'
import FrontPage from '../HomePageComponents/FrontPageComponent/FrontPage' 
import Team from '../HomePageComponents/TeamComponent/Team'
import Sponser from '../HomePageComponents/SponserComponent/Sponser'

const Home = () => {
    return (
        <>
            <Layout>
                <FrontPage />
                <FrontPage />
                <Team/>
                <Sponser/>
            </Layout>
        </>
    )
}

export default Home