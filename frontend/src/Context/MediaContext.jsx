import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const MediaContext = createContext(null);

const getDefaultWatchlist = ()=>{
    let watchlist = {};
    for(let index = 0; index < 300 + 1; index++){
        watchlist[index] = false;
    }
    return watchlist;
}

const MediaContextProvider = (props)=>{

    const [allMedia, setAllMedia] = useState([])
    const [watchlist, setWatchlist] = useState(getDefaultWatchlist());

    const addtoWatchlist = (mediaId) =>{
        setWatchlist((prev)=>({...prev, [mediaId]: true}))
        console.log(watchlist);
    }

    const removeFromWatchlist = (mediaId) =>{
        setWatchlist((prev)=>({...prev, [mediaId]: false}))
    
    }
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


    const contextValue = {allMedia, watchlist, addtoWatchlist, removeFromWatchlist};
    console.log(watchlist)

    return (
        <MediaContext.Provider value={contextValue}>
            {props.children}
        </MediaContext.Provider>
    )
}

export default MediaContextProvider;