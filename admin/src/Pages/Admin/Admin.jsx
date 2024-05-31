import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddMovie from '../../Components/AddMovie/AddMovie'
import ListMovies from '../../Components/ListMovies/ListMovies'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route path='/addmovie' element={<AddMovie/>}/>
            <Route path='/listmovies' element={<ListMovies/>}/>
        </Routes> 
    </div>
  )
}

export default Admin