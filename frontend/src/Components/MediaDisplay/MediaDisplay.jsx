import React from 'react'

const MediaDisplay = () => {
    
    return (
        <>
            <div style={{ marginTop: "90px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-12" style={{
                            position: 'relative',
                            display: 'inline-block'
                        }}>
                            <img src="https://picsum.photos/800/950" alt="" className="img-fluid" />
                            <button className="btn btn-primary btn-lg" style={{
                                position: 'absolute',
                                left: '13px',
                                borderRadius:'0px',
                                padding: '0px'
                            }}><i class="bi bi-bookmark-plus-fill"></i></button>
                        </div>
                        <div className="col-lg-7 col-md-12 col-12 ps-lg-5 mt-md-1">
                            <div style={{ marginBottom: "10px" }}>
                                <h2 className="text-start display-4" style={{ fontWeight: '900px' }}>One Day</h2>
                                <h6>2011 . <span className='border rounded p-1' style={{ backgroundColor: '' }}>Romace</span> <span className='border rounded p-1' style={{ backgroundColor: '', marginLeft: '2px' }}>Drama</span></h6>
                                <p className="text-start lead" style={{ marginTop: "20px" }}>After spending the night together on the eve of their college graduation,
                                    Dexter and Emma are shown each year on the same date to see where they are in their lives. They are sometimes together, and sometimes not.
                                </p>

                            </div>
                            <div className="container" style={{ marginTop: "10px" }}>
                                <div className="row">
                                    <div class="">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">iMDB Rating: 7.0</li>
                                            <li class="list-group-item">Director: Lone Scherfig</li>
                                            <li class="list-group-item">Stars: Anne Hathaway, Jim Sturgess</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="container text-start" style={{ marginTop: "30px" }}>
                                <iframe width="320" height="240" src="https://www.youtube.com/embed/t0Q2otsqC4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

export default MediaDisplay