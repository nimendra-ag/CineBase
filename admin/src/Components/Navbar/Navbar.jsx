import React from 'react'
import './Navbar.css'
import navlogo from '../../../../images/nav-logo.svg';
import navProfile from '../../../../images/nav-profile.svg';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
        <p className='nav-title'>Admin Panel - CineBase</p>
        {/* <img src={navProfile} className='nav-profile ' alt="" /> */}
        {localStorage.getItem('auth-token')
                  ? <Link><button className='btn text-black text-start' style={{ padding: '5px 5px', border:'0px'}} onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/login') }}>Logout</button></Link>
                  : <></>}
    </div>
  )
}

export default Navbar