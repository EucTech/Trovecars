import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
