import React, { useState, useEffect } from 'react'
import './ListMovies.css'
import cross_icon from '../../assets/cross_icon.png'
import axios from 'axios';


const ListMovies = () => {
  const [allMovies, setAllMovies] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await axios.get('http://localhost:4000/allmovies');
      setAllMovies(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_movie = async (id) => {
    try {
      await axios.post('http://localhost:4000/removemovie', { id: id }, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      await fetchInfo();
    } catch (error) {
      console.error('Error removing movie:', error);
    }
  }


  return (

    <div className='list-product'>
      <h1>All Movies List</h1>
      <div className="listproduct-format-main">
        <p>Movie</p>
        <p>Released Year</p>
        <p>Rating</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allMovies.map((movie, index) => {
          return <>
          <div key={index} className="listproduct-format-main listproduct-format">
            <img src={movie.cardImage} alt="" className="listproduct-product-icon" />
            <p>{movie.name}</p>
            <p>{movie.releasedYear}</p>
            <p>{movie.rating}</p>
            <img onClick={()=>{remove_movie(movie.id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
          </div>
          </>
        })}
      </div>
    </div>

  )
}

export default ListMovies