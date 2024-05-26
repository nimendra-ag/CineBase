import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Images/Sabzi.png'
import './Navbar.css'
const Navbar = () => {
  return (
   <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
            <img src={Logo} alt="" style={{width: '110px', height:'40px'}}/>
        </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><div href="#" className="nav-link px-2 link-secondary me-3"><Link style={{textDecoration: 'none'}} to='/watchlist'>Watchlist</Link></div></li>
        <li><div href="#" className="nav-link px-2 link-dark"><Link style={{textDecoration: 'none'}} to='/reviews'>Reviews</Link></div></li>
        <li><div href="#" className="nav-link px-2 link-dark"><Link style={{textDecoration: 'none'}} to='/categories'>Categories</Link></div></li>
        <li><div href="#" className="nav-link px-2 link-secondary"><Link style={{textDecoration: 'none'}} to='/account'>Account</Link></div></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2" ><Link style={{textDecoration: 'none'}} to='/login'>Login</Link></button>
      </div>
    </header>
  </div>
  )
}

export default Navbar