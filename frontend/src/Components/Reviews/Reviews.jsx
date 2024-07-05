import React from 'react'
import AddReview from '../AddReview/AddReview'

const Reviews = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center" style={{ marginTop: "100px" }}>Reviews By Fans</h2>
                        <AddReview/>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "50px" }}>
                    <div className="card">
                        <h5 className="card-header">Featured</h5>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "50px" }}>
                    <div className="card">
                        <h5 className="card-header">Featured</h5>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "50px" }}>
                    <div className="card">
                        <h5 className="card-header">Featured</h5>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Reviews