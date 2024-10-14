import React, { useState, useEffect } from 'react';
import './ListMovies.css';
import cross_icon from '../../assets/cross_icon.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [movieToDelete, setMovieToDelete] = useState(null); // Movie selected for deletion
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // Success alert state

  const [loading, setLoading] = useState(false);

  // Fetch all movies
  const fetchInfo = async () => {
    try {
      const response = await axios.get('http://localhost:4000/allmovies');
      setAllMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Trigger modal with movie id
  const handleDeleteClick = (movie) => {
    setMovieToDelete(movie); // Set the movie to delete
    setShowModal(true); // Show the modal
  };

  // Remove the movie from the list
  const removeMovie = async () => {
    setLoading(true)
    try {
      await axios.post('http://localhost:4000/removemovie', { id: movieToDelete.id }, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      setShowModal(false); // Hide the modal after deleting
      setShowSuccessAlert(true); // Show success alert
      fetchInfo(); // Refresh the list after deletion
      setTimeout(() => {
        setShowSuccessAlert(false); // Hide the alert after a few seconds
      }, 3000); // Alert is visible for 3 seconds
    } catch (error) {
      console.error('Error removing movie:', error);
    }
  };

  // Handle cancel action
  const cancelDelete = () => {
    setMovieToDelete(null); // Clear the selected movie
    setShowModal(false); // Hide the modal
  };

  return (
    <div className='list-product'>
      <h1>All Movies List</h1>

      {/* Success Alert */}
      {showSuccessAlert && (
        <div className="success-alert">
          <p>Movie deleted successfully!</p>
        </div>
      )}

      <div className="listproduct-format-main">
        <p>Movie</p>
        <p>Released Year</p>
        <p>Rating</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allMovies.map((movie, index) => (
          <div key={index} className="listproduct-format-main listproduct-format">
            <Link to={`/media/${movie.id}`}><img src={movie.cardImage} alt="" className="listproduct-product-icon" /> </Link>
            <p>{movie.name}</p>
            <p>{movie.releasedYear}</p>
            <p>{movie.rating}</p>
            <img onClick={() => handleDeleteClick(movie)} className='listproduct-remove-icon' src={cross_icon} alt="" />
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content text-white">
            <h2>Delete this movie?</h2>
            <p>Are you sure you want to delete <strong>{movieToDelete?.name}</strong>?</p>
            <div className="modal-buttons">
              {loading ? (
                <div className="spinner-border spinner-border-sm text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : <>
                <button className="btn btn-danger" onClick={removeMovie}>Yes</button>
                <button className="btn btn-secondary" onClick={cancelDelete}>No</button>
              </>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListMovies;
