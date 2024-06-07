import React from 'react'

const MovieDisplay = () => {
    return (
        <>
            <div style={{ marginTop: "90px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-12">
                            <img src="https://picsum.photos/800/950" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-7 col-md-12 col-12 ps-lg-5 mt-md-1">
                            <div style={{ marginBottom: "10px" }}>
                                <h2 className="text-center">All our PRO level features at<br />your fingertips...</h2>
                                <p className="text-center" style={{ marginTop: "50px" }}>Welcome to FinWise, your trusted companion on the journey to
                                    financial mastery. Take
                                    control of your money, track expenses effortlessly, and make informed decisions. FinWise
                                    simplifies financial management, ensuring your path to prosperity is clear, guided, and
                                    stress-free.</p>

                            </div>
                            <div className="container text-center" style={{ marginTop: "50px" }}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img src="img/icon-1.png" alt="" />
                                        <p className="text-center">Find an extra $395
                                            hiding in plain sight
                                        </p>
                                    </div>
                                    <div className="col-lg-4">
                                        <img src="img/icon-2.png" alt="" />
                                        <p className="text-center">Find an extra $395
                                            hiding in plain sight
                                        </p>
                                    </div>
                                    <div className="col-lg-4">
                                        <img src="img/icon-3.png" alt="" />
                                        <p className="text-center">Find an extra $395
                                            hiding in plain sight
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center" style={{ marginTop: "100px" }}>Reviews By Fans</h2>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "50px" }}>
                    <div class="card">
                        <h5 class="card-header">Featured</h5>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "50px" }}>
                    <div class="card">
                        <h5 class="card-header">Featured</h5>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "50px" }}>
                    <div class="card">
                        <h5 class="card-header">Featured</h5>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MovieDisplay