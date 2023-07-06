import React from 'react'
import AboutPastEvent from './AboutPastProjects/AboutPastProjects'
import Ongoing from './AboutUsOnGoing/Ongoing'
import Layout from '../../Layout/Layout'

const AboutUs = () => {
  return (
    <>
    <Layout>
        <AboutPastEvent/>
        <Ongoing/>
    </Layout>
    </>
  )
}

export default AboutUs