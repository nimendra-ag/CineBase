import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Images/Sabzi.png'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(8, 8, 8, 0.7)' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={Logo} style={{ width: '110px', height: '40px' }} /></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
            aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
              <li><div className="nav-link px-2 link-secondary nav-item"><Link className="nav-link active" style={{ textDecoration: 'none' }} to='/watchlist'>Watchlist</Link></div></li>
              <li><div className="nav-link px-2 link-dark nav-item "><Link className="nav-link active"  style={{ textDecoration: 'none' }} to='/categories'>Categories</Link></div></li>
              <li><div className="nav-link px-2 link-secondary nav-item"><Link className="nav-link active" style={{ textDecoration: 'none' }} to='/account'>Account</Link></div></li>
              <li><div className="nav-link px-2 link-secondary nav-item"><Link className="nav-link active"  style={{ textDecoration: 'none' }} to='/account'>Account</Link></div></li>
            </ul>

            <div className="dropdown">
            <button type="button" className="btn btn-danger">Dropdown</button>
              <div className="dropdown-content">
                <a className="nav-link" href="#">Watchlist</a>
                <Link to='/profile'><button>Profile</button></Link>
                <Link to='/watchlist'><button>Watchlist</button></Link>
                <Link to='/changepassword'><button>Change<br />Password</button></Link>
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/login')}}>Logout</button>
              :<Link to='/login'><button>Login</button></Link>}
              </div>
            </div>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar