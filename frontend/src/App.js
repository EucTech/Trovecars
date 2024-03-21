import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Hero/>
      </BrowserRouter>
    </div>
  )
}

export default App
