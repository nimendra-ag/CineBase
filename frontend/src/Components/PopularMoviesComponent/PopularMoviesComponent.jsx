import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import axios from 'axios';

const mediaType = 'Movie';
const count = 6;


const TVShowsComponent = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/Media?mediaType=${mediaType}&count=${count}`)
            .then((response) => {
                const movies = response.data;
                setPopularMovies(movies);
                console.log(movies)

            })
            .catch(error => console.error('Error:', error));
    }, [])



    return (
        <>
            <div class="row">
                <div class="col-md-12">
                    <div class="mt-5">
                        <h1 class="text-start">Popular TV Shows</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="mt-5">
                        <div class="row">
                            <div class="col-sm-12 col-lg-12">
                                <div class="row row-cols-1 row-cols-md-4 g-3">

                                    {popularMovies.map((media, i) => {
                                        return <Item key={i} media={media} name={media.name} cardImage={media.cardImage} rating={media.rating} trailor={media.trailor} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5 mb-5 text-center">
                <button type="button" class="btn btn-primary">Primary</button>

            </div>
        </>
    )
}

export default TVShowsComponent