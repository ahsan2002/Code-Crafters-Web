import React from 'react'
import Carousel from './carousel'
import './FrontPage.css'


const FrontPage = () => {
  return (
    <div id='frontPage'
      style={{
        maxHeight: "100dvh",
      }}
    >
      <Carousel />
    </div>
  )
}

export default FrontPage