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
              <li><div className="nav-link px-2 link-secondary nav-item"><Link className="nav-link active" style={{ textDecoration: 'none' }} to='/movies'>Movies</Link></div></li>
              <li><div className="nav-link px-2 link-secondary nav-item"><Link className="nav-link active" style={{ textDecoration: 'none' }} to='/tvshows'>TV Shows</Link></div></li>
            </ul>

            <div className="dropdown" style={{ marginRight: '60px' }}>
              <button type="button" className="btn btn-danger">Dropdown</button>
              <div className="dropdown-content" style={{ backgroundColor: '#1A1A1A' }}>
                <Link to='/profile'><button className='btn text-start text-white' style={{ padding: '5px 5px', border:'0px'}}>Profile</button></Link>
                <Link to='/watchlist'><button className='btn text-start text-white' style={{ padding: '5px 5px', border:'0px'}}>Watchlist</button></Link>
                <Link to='/changepassword'><button className='btn text-start text-white' style={{ padding: '5px 5px', border:'0px' }}>Change<br />Password</button></Link>
                {localStorage.getItem('auth-token')
                  ? <Link><button className='btn text-white text-start' style={{ padding: '5px 5px', border:'0px'}} onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/login') }}>Logout</button></Link>
                  : <Link to='/login'><button className='btn text-start text-white' style={{ padding: '5px 5px', border:'0px'}}>Login</button></Link>}
              </div>
            </div>

          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar