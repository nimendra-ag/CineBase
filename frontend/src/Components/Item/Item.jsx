import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MediaContext } from '../../Context/MediaContext';

const Item = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const { addtoWatchlist } = useContext(MediaContext);
    // console.log("This is from the item component")
    // console.log(props, props.name, props.id)
    return (
        <>
            <div className="col col-md-4 col-lg-2 col-xl-2 mb-4">
                <div className="card h-100" style={{ backgroundColor: 'rgb(26,26,26)', color: 'white' }}>
                    <Link to={`/media/${props.id}`} ><img src={props.cardImage} className="card-img-top" alt="..." /></Link>
                    <div className="card-body" style={{ paddingBottom: '0px' }}>
                        <p style={{ fontSize: '14px' }} ><i className="bi bi-star-fill"></i> {props.rating}</p>
                        <h5 style={{ fontSize: '18px' }} className="card-title">{props.name}</h5>
                    </div>
                    <div className="card-footer text-center" style={{ paddingTop: '0px' }}>
                        <a href="#" className="btn btn-primary" style={{ marginBottom: '10px', backgroundColor: 'rgb(44,44,44)', border: '0px' }} onClick={() => { addtoWatchlist(props.id) }} ><i className="bi bi-bookmark-plus"></i> Watchlist</a>
                        <a
                            href={props.trailor}
                            target='_blank'
                            className="btn btn-primary"
                            style={{
                                // backgroundColor: 'transparent',
                                border: '0px',
                                backgroundColor: isHovered ? 'rgb(44, 44, 44)' : 'inherit',
                                transition: 'color 0.3s',
                                textDecoration: 'none' 
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <i className="bi bi-play"></i> Trailer
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item