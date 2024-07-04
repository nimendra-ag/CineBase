import React, { useState } from 'react'
import './AddMovie.css'
import upload_area from '../../assets/upload_area.svg'
import axios from 'axios';


const AddMovie = () => {
    const [caroImage, setCaroImage] = useState(false);
    const [cardImage, setCardImage] = useState(false);
    const [displayImage, setDisplayImage] = useState(false);

    const [movieDetails, setMovieDetails] = useState({
        name: "",
        caroImage: "",
        cardImage: "",
        displayImage: "",
        trailor: "",
        director: "",
        releasedYear: "",
        rating: "",
        genre1: "Drama",
        genre2: "Drama",
        leadActor: "",
        supportActor: "",
        description: "",
        category: "TVShow",
    })

    const displayImageHandler = (e) => {

        setDisplayImage(e.target.files[0]);
        console.log(`Image added, ${displayImage}`);
    }

    const cardImageHandler = (e) => {

        setCardImage(e.target.files[0]);
        console.log(`Image added, ${cardImage}`);
    }

    const caroImageHandler = (e) => {

        setCaroImage(e.target.files[0]);
        console.log(`Image added, ${caroImage}`);
    }

    const changeHandler = (e) => {
        setMovieDetails({ ...movieDetails, [e.target.name]: e.target.value })
    }

    const Add_Movie = async () => {
        console.log(movieDetails);
        let responseDataCaro;
        let responseDataCard;
        let responseDataDisplay;
        let movie = movieDetails;
        let formDataCaro = new FormData();
        let formDataCard = new FormData();
        let formDataDisplay = new FormData();

        formDataCaro.append('media', caroImage);
        formDataCard.append('media', cardImage);
        formDataDisplay.append('media', displayImage);

        try {
            const response = await axios.post('http://localhost:4000/upload', formDataCaro, {
                headers: {
                    Accept: 'application/json',
                },
            });
            responseDataCaro = response.data;
            console.log(responseDataCaro);
        } catch (error) {
            console.error('Error uploading images:', error);
        }

        try {
            const response = await axios.post('http://localhost:4000/upload', formDataCard, {
                headers: {
                    Accept: 'application/json',
                },
            });
            responseDataCard = response.data;
            console.log(responseDataCard);
        } catch (error) {
            console.error('Error uploading images:', error);
        }

        try {
            const response = await axios.post('http://localhost:4000/upload', formDataDisplay, {
                headers: {
                    Accept: 'application/json',
                },
            });
            responseDataDisplay = response.data;
            console.log(responseDataDisplay);
        } catch (error) {
            console.error('Error uploading images:', error);
        }

        if (responseDataCaro.success && responseDataCard.success && responseDataDisplay.success) {
            movie.caroImage = responseDataCaro.image_url;
            movie.cardImage = responseDataCard.image_url;
            movie.displayImage = responseDataDisplay.image_url;

            console.log(movie);

            try {
                const response = await axios.post('http://localhost:4000/addmovie', movieDetails, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });

                if (response.data.success) {
                    alert("Movie Added");
                } else {
                    alert("Failed to add Movie");
                }
            } catch (error) {
                console.error('Error adding movie:', error.response ? error.response.data : error.message);
                alert("Failed to add Movie");
            }

        }
    }
    return (
        <div className='add-product'>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Name</p>
                    <input value={movieDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />

                </div>
                <div className="addproduct-itemfield">
                    <p>Released Year</p>
                    <input value={movieDetails.releasedYear} onChange={changeHandler} type="text" name='releasedYear' placeholder='Type here' />
                </div>
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Lead Actor</p>
                    <input value={movieDetails.leadActor} onChange={changeHandler} type="text" name='leadActor' placeholder='Type here' />

                </div>
                <div className="addproduct-itemfield">
                    <p>Support Actor</p>
                    <input value={movieDetails.supportActor} onChange={changeHandler} type="text" name='supportActor' placeholder='Type here' />
                </div>
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Youtube Trailor Link</p>
                    <input value={movieDetails.trailorLink} onChange={changeHandler} type="text" name='trailor' placeholder='Type here' />

                </div>
                <div className="addproduct-itemfield">
                    <p>Director</p>
                    <input value={movieDetails.director} onChange={changeHandler} type="text" name='director' placeholder='Type here' />
                </div>
            </div>

            <div className="addproduct-itemfield">
                <p>Description</p>
                <textarea value={movieDetails.description} onChange={changeHandler} type="text" name='description' placeholder='Type here' />
            </div>

            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>IMDB Rating</p>
                    <input value={movieDetails.rating} onChange={changeHandler} type="text" name='rating' placeholder='Type here' />

                </div>

                <div className="addproduct-itemfield">
                    <p>Genre 1</p>
                    <select value={movieDetails.genre1} onChange={changeHandler} name="genre1" className='add-product-selector'>
                        <option value="Drama">Drama</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Romance">Romance</option>
                        <option value="Comady">Comady</option>
                        <option value="Action">Action</option>
                        <option value="Fantasy">Fantasy</option>
                    </select>

                </div>
                <div className="addproduct-itemfield">
                    <p>Genre 2</p>
                    <select value={movieDetails.genre2} onChange={changeHandler} name="genre2" className='add-product-selector'>
                        <option value="Drama">Drama</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Romance">Romance</option>
                        <option value="Comady">Comady</option>
                        <option value="Action">Action</option>
                        <option value="Fantasy">Fantasy</option>
                    </select>
                </div>
                <div className="addproduct-itemfield">
                    <p>Category</p>
                    <select value={movieDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                        <option value="TVShow">TV Show</option>
                        <option value="Movie">Movie</option>
                    </select>
                </div>

            </div>

            <div className="addproduct-price">
                <div className="addproduct-price">


                    <div className="addproduct-itemfield">
                        <label htmlFor="caro-file-input">
                            <img src={caroImage ? URL.createObjectURL(caroImage) : upload_area} className='addproduct-thumbnail-img' alt="" />
                        </label>
                        <input type="file" onChange={caroImageHandler} name='caroImage' id='caro-file-input' hidden />
                        <p>Carousel</p>
                    </div>

                    <div className="addproduct-itemfield">
                        <label htmlFor="card-file-input">
                            <img src={cardImage ? URL.createObjectURL(cardImage) : upload_area} className='addproduct-thumbnail-img' alt="" />
                        </label>
                        <input type="file" onChange={cardImageHandler} name='cardImage' id='card-file-input' hidden />
                        <p>Card</p>
                    </div>

                    <div className="addproduct-itemfield">
                        <label htmlFor="display-file-input">
                            <img src={displayImage ? URL.createObjectURL(displayImage) : upload_area} className='addproduct-thumbnail-img' alt="" />
                        </label>
                        <input type="file" onChange={displayImageHandler} name='displayImage' id='display-file-input' hidden />
                        <p>Display</p>
                    </div>
                </div>
            </div>

            <button onClick={() => { Add_Movie() }} className='addproduct-button'>ADD</button>
        </div>
    )
}

export default AddMovie