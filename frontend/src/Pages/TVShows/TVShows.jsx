import React from 'react'
import './TVShows.css'
const TVShows = () => {
    return (

        <>
            <div className="hero-image" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.827), rgba(0, 0, 0, 0.8)), url(https://picsum.photos/1920/980)' }}>
                <div className="hero-text">
                    <h1 style={{ fontSize: "50px" }}>I am Jane Doe</h1>
                    <h3>And I'm a Photographer</h3>
                    <button>Hire me</button>
                </div>
            </div>

            <div className="container-fluid text-center bg-dark text-lidgt p-3 mt-5">

                <div className="row">
                    <div className="col-md-12">
                        <h1><span className="text-danger">100% QUALITY SERVICES</span></h1>
                    </div>
                </div>

            </div>

            <section>

                <div className="section">
                    <div className="container p-5" id="services">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="mt-5">
                                    <h1 className="text-start">Popular in this week</h1>
                                </div>
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-lg-12">

                                {/* <!--Bootstrap card--> */}
                                <div className="row row-cols-1 row-cols-md-4 g-3">
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This
                                                    content is a little bit longer.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This card has supporting text below as a
                                                    natural lead-in to additional content.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-6 col-xl-3">
                                        <div className="card h-100">
                                            <img src="https://picsum.photos/500/300" className="card-img-top"
                                                alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text
                                                    below as a natural lead-in to additional content. This card
                                                    has even longer content than the first to show that equal
                                                    height action.</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">Last updated 3 mins
                                                    ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TVShows