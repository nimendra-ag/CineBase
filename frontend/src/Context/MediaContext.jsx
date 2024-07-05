import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const MediaContext = createContext(null);

const getDefaultWatchlist = () => {
    let watchlist = {};
    for (let index = 0; index < 300; index++) {
        watchlist[index] = false;
    }
    return watchlist;
}

const MediaContextProvider = (props) => {

    const [allMedia, setAllMedia] = useState([])
    const [watchlist, setWatchlist] = useState(getDefaultWatchlist());

    const addtoWatchlist = (mediaId) => {
        setWatchlist((prev) => ({ ...prev, [mediaId]: true }))
        if (localStorage.getItem('auth-token')) {
            axios.post('http://localhost:4000/addtowatchlist',
                { mediaId },
                {
                    headers:
                    {
                        'Accept': 'application/form-data',
                        'auth-token': localStorage.getItem('auth-token'),
                        'Content-Type': 'application/json'
                    }
                })
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.error("There was an error!", error);
                });
        }
        console.log(watchlist);
    }

    const removeFromWatchlist = (mediaId) => {
        setWatchlist((prev) => ({ ...prev, [mediaId]: false }))
        if (localStorage.getItem('auth-token')) {
            axios.post('http://localhost:4000/removefromwatchlist', { mediaId }, { headers: { 'Accept': 'application/form-data', 'auth-token': localStorage.getItem('auth-token'), 'Content-Type': 'application/json' } })
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.error("There was an error!", error);
                });
        }

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

        if (localStorage.getItem('auth-token')) {
            axios.post('http://localhost:4000/getwatchlist', {}, { headers: { 'Accept': 'application/form-data', 'auth-token': localStorage.getItem('auth-token'), 'Content-Type': 'application/json' } })
                .then((response) => {
                    console.log(response.data);
                    setWatchlist(response.data);
                })
                .catch((error) => {
                    console.error("There was an error fetching the data!", error);
                });
        }
    }, []);


    const contextValue = { allMedia, watchlist, addtoWatchlist, removeFromWatchlist };
    // console.log(watchlist)

    return (
        <MediaContext.Provider value={contextValue}>
            {props.children}
        </MediaContext.Provider>
    )
}

export default MediaContextProvider;