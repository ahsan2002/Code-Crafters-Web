import React from 'react'
import AboutPastEvent from './AboutPastProjects/AboutPastProjects'
import Ongoing from './AboutUsOnGoing/Ongoing'
import Layout from '../../Layout/Layout'
import AboutUsCard from './AboutUsCard/AboutUsCard'

const AboutUs = () => {
  return (
    <>
    <Layout>
      <AboutUsCard/>
        <AboutPastEvent/>
        <Ongoing/>
    </Layout>
    </>
  )
}

export default AboutUs