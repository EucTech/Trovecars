import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
    </div>
  )
}

export default App
