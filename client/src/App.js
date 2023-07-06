import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import ContactUs from './Components/ContactUsComponent/ContactUs'
// import AboutUs from './Components/AboutUs/AboutUs'
import AboutUs from './Components/AboutUs/AboutUs'


const App = () => {
  /** Root Routes */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/contact-us',
      element: <ContactUs />
    },
    {
      path: '/about',
      element: <AboutUs/>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App