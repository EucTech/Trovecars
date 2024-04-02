import React from 'react'
import MainNavbar from '../Components/MainNavbar/MainNavbar'
import './CSS/UserAccount.css'

const UserAccount = () => {
  return (
    <div className='useraccount'>
      <MainNavbar/>
      <div className='useraccount-section'>
      <h3>Name: <span>Ezeibe Uchechukwu</span></h3>
      <h3>Email: <span>euceze@gmail.com</span></h3>
      </div>
    </div>
  )
}

export default UserAccount
