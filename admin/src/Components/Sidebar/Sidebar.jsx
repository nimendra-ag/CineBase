import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom';
import add_product_icon from '../../../../images/Product_Cart.svg'
import list_product_icon from '../../../../images/Product_list_icon.svg'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addmovie'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={add_product_icon} alt="" />
                <p>Add Movie</p>
            </div>
        </Link>

        <Link to={'/listmovies'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={list_product_icon} alt="" />
                <p>Movie List</p>
            </div>
        </Link>

        <Link to={'/listmovies'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={list_product_icon} alt="" />
                <p>New Admin</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar 