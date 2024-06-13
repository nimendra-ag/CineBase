import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const MediaContext = createContext(null);

const MediaContextProvider = (props)=>{

    const [allMedia, setAllMedia] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/allmovies')
            .then((response) => {
                const movies = response.data;
                setAllMedia(movies);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);


    console.log(allMedia)
    const contextValue = {allMedia};

    return (
        <MediaContext.Provider value={contextValue}>
            {props.children}
        </MediaContext.Provider>
    )
}

export default MediaContextProvider;