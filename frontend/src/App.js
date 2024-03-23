import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Items from './Components/Items/Items'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Items/>
      </BrowserRouter>
    </div>
  )
}

export default App
