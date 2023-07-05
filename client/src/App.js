import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'


const App = () => {
  /** Root Routes */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App