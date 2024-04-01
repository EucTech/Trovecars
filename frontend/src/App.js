import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'
import Seller from './Pages/Seller'
import Product from './Pages/Product'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import UserAccount from './Pages/UserAccount'
import CarSearch from './Pages/CarSearch'
import NotFound from './Components/NotFound/NotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cars' element={<CarSearch/>} />
          <Route path='/seller' element={<Seller/>} />
          <Route path='/product/:productId' element={<Product/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/account' element={<UserAccount/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes >

        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
