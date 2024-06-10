import React from 'react'
import './Movies.css'
import Item from '../../Components/Item/Item'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Movies = () => {

    const [allMovies, setAllMovies] = useState([]);
    const [randomMovie, setRandomMovie] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:4000/allmovies')
            .then((response) => {
                const movies = response.data;
                setAllMovies(movies);

                // Select a random movie
                if (movies.length > 0) {
                    const randomIndex = Math.floor(Math.random() * movies.length);
                    setRandomMovie(movies[randomIndex]);
                }
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);
    console.log(randomMovie)
    return (

        <>
            {
                randomMovie ? <> <div className="hero-image" style={{ backgroundImage: `url(${randomMovie.caroImage})` }}>
                    <div className="hero-text">


                        <div style={{marginLeft: '100px'}}>
                            <h1 style={{ fontSize: "50px"}}>{randomMovie.name}</h1>
                            <h4>{randomMovie.leadActor}, {randomMovie.supportActor}</h4>
                            <h4>{randomMovie.rating} IMDB Score</h4>
                            <h4>{randomMovie.genre1}, {randomMovie.genre2}</h4>
                            <p>{randomMovie.description}</p>
                            <a href={randomMovie.trailor} target='_blank' className="btn btn-primary"><i className="bi bi-play"></i>Trailor</a>
                        </div>
                    </div>
                </div></> : <></>
            }


            <div className="container-fluid text-center bg-dark text-lidgt p-3 mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1><span className="text-danger">100% QUALITY SERVICES</span></h1>
                    </div>
                </div>
            </div>

            <section>
                <div className="section">
                    <div className="container p-5" id="services">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <div className="row row-cols-1 row-cols-md-4 g-3">
                                    {allMovies.map((movie, index) => {
                                        return (
                                            <Item key={index} movie={movie} name={movie.name} cardImage={movie.cardImage} rating={movie.rating} trailor={movie.trailor} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movies