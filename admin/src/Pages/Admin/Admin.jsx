import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AddMovie from '../../Components/AddMovie/AddMovie'
import ListMovies from '../../Components/ListMovies/ListMovies'
import UpdateMovie from '../../Pages/UpdateMovie/UpdateMovie'
import AdminLogin from '../AdminLogin/AdminLogin'
import AdminRegister from '../AdminRegister/AdminRegister'
import { useEffect } from 'react'

const Admin = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('auth-token')){
      navigate('/adminlogin');
    }
  }, [navigate]);

  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route path='/addmovie' element={<AddMovie/>}/>
            <Route path='/listmovies' element={<ListMovies/>}/>
            <Route path='/media/:mediaId' element={<UpdateMovie/>}/>
            <Route path='/adminlogin' element={<AdminLogin/>}></Route>
            <Route path='/adminregister' element={<AdminRegister/>}></Route>
        </Routes> 
    </div>
  )
}

export default Admin