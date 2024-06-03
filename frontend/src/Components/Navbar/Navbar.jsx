import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Images/Sabzi.png'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Navbar = () => {
  return (
    //  <div className="container">
    //   <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    //   <a
    //         href="/"
    //         className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
    //       >
    //           <img src={Logo} alt="" style={{width: '110px', height:'40px'}}/>
    //       </a>

    //     <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    //       <li><div href="#" className="nav-link px-2 link-secondary me-3"><Link style={{textDecoration: 'none'}} to='/watchlist'>Watchlist</Link></div></li>
    //       <li><div href="#" className="nav-link px-2 link-dark"><Link style={{textDecoration: 'none'}} to='/reviews'>Reviews</Link></div></li>
    //       <li><div href="#" className="nav-link px-2 link-dark"><Link style={{textDecoration: 'none'}} to='/categories'>Categories</Link></div></li>
    //       <li><div href="#" className="nav-link px-2 link-secondary"><Link style={{textDecoration: 'none'}} to='/account'>Account</Link></div></li>
    //     </ul>

    //     <div className="col-md-3 text-end">
    //       <button type="button" className="btn btn-outline-primary me-2" ><Link style={{textDecoration: 'none'}} to='/login'>Login</Link></button>
    //     </div>
    //   </header>
    // </div>
    <header>

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'rgba(8, 8, 8, 0.7)' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={Logo} style={{ width: '110px', height: '40px' }} /></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
            aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
              <li><div className="nav-link px-2 link-secondary nav-item"><Link className="nav-link active" style={{ textDecoration: 'none' }} to='/watchlist'>Watchlist</Link></div></li>
              <li><div className="nav-link px-2 link-dark nav-item"><Link className="nav-link active"  style={{ textDecoration: 'none' }} to='/reviews'>Reviews</Link></div></li>
              <li><div className="nav-link px-2 link-dark nav-item "><Link className="nav-link active"  style={{ textDecoration: 'none' }} to='/categories'>Categories</Link></div></li>
              <li><div className="nav-link px-2 link-secondary nav-item"><Link className="nav-link active" style={{ textDecoration: 'none' }} to='/account'>Account</Link></div></li>
              <li><div className="nav-link px-2 link-secondary nav-item"><Link className="nav-link active"  style={{ textDecoration: 'none' }} to='/account'>Account</Link></div></li>
            </ul>

            <div className="dropdown">
              <button className="btn btn-success">Dropdown</button>
              <div className="dropdown-content">
                <a className="nav-link" href="#">Link 1</a>
                <a className="nav-link" href="#">Link 2</a>
                <a className="nav-link" href="#">Link 3</a>
              </div>
            </div>


          </div>
        </div>
      </nav>

    </header>
  )
}

export default Navbar