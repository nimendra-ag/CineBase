import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    console.log("This is from the item component")
    console.log(props, props.name, props.id)
    return (
        <>
            <div className="col col-md-4 col-lg-2 col-xl-2 mb-4">
                <div className="card h-100">
                    <Link to={`/media/${props.id}`} ><img src={props.cardImage} className="card-img-top" alt="..." /></Link>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p><i className="bi bi-star-fill"></i> {props.rating}</p>
                        <a href="#" className="btn btn-primary"><i className="bi bi-bookmark-plus"></i> Watchlist</a>
                    </div>
                    <div className="card-footer">
                        <a href={props.trailor} target='_blank' className="btn btn-primary"><i className="bi bi-play"></i> Trailor</a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Item