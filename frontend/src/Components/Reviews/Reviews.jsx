import React, { useEffect, useState } from 'react'
import AddReview from '../AddReview/AddReview'
import axios from 'axios'

const Reviews = (props) => {
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/allreviews')
            .then((response) => {
                const reviews = response.data;
                setAllReviews(reviews);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <div className='container mb-5'>
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center" style={{ marginTop: "100px" }}>Reviews By Fans</h2>
                        <AddReview mediaId={props.mediaId} />
                    </div>
                </div>
                {
                    allReviews.map((review, i) => {
                        if (props.mediaId === review.mediaId) {
                            return (
                                <>
                                    <div className="row" style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}>
                                        <div className="card" style={{ width: "80%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
                                            <div className="card-body">
                                                <h5 className="card-title" style={{ color: "#007bff", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "10px" }}>{review.userName}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted" style={{ marginBottom: "20px" }}>Reviewed on {review.date}</h6>
                                                <p className="card-text" style={{ fontSize: "1rem", lineHeight: "1.5", marginBottom: "20px" }}>"{review.reviewText}"</p>

                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        }
                    })
                }

            </div>
        </>
    )
}

export default Reviews