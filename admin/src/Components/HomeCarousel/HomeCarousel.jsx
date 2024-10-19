import React from 'react'
import { useContext} from 'react';
import { MediaContext } from '../../../../frontend/src/Context/MediaContext';

const HomeCarousel = () => {
    const { allMedia } = useContext(MediaContext);
    const carouselImage1 = allMedia[Math.floor(Math.random() * allMedia.length)];
    const carouselImage2 = allMedia[Math.floor(Math.random() * allMedia.length)];
    const carouselImage3 = allMedia[Math.floor(Math.random() * allMedia.length)];

    return (
        <>
            {carouselImage1 && carouselImage2 && carouselImage3 ? <>
                <div className="section">
                    <div className="container-fluid1">
                        <div id="carouselExampleDark" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="3000">
                                    <img src={carouselImage1.caroImage} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block text-start">
                                        <div>
                                            <h1>{carouselImage1.name}</h1>
                                            <h4>{carouselImage1.leadActor}, {carouselImage1.supportActor}</h4>
                                            <h4>{carouselImage1.rating} IMDB Score </h4>
                                            <h4> {carouselImage1.genre1}, {carouselImage1.genre2}</h4>
                                            <p>{carouselImage1.description}</p>
                                            <a href={carouselImage1.trailor} target='_blank' className="btn btn-danger"><i className="bi bi-play"></i>Trailor</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="3000">
                                <img src={carouselImage2.caroImage} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block text-start">
                                        <div>
                                            <h1>{carouselImage2.name}</h1>
                                            <h4>{carouselImage2.leadActor}, {carouselImage2.supportActor}</h4>
                                            <h4>{carouselImage2.rating} IMDB Score </h4>
                                            <h4> {carouselImage2.genre1}, {carouselImage2.genre2}</h4>
                                            <p>{carouselImage2.description}</p>
                                            <a href={carouselImage2.trailor} target='_blank' className="btn btn-danger"><i className="bi bi-play"></i>Trailor</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="3000">
                                <img src={carouselImage3.caroImage} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block text-start">
                                        <div>
                                            <h1>{carouselImage3.name}</h1>
                                            <h4>{carouselImage3.leadActor}, {carouselImage3.supportActor}</h4>
                                            <h4>{carouselImage3.rating} IMDB Score </h4>
                                            <h4> {carouselImage3.genre1}, {carouselImage3.genre2}</h4>
                                            <p>{carouselImage3.description}</p>
                                            <a href={carouselImage3.trailor} target='_blank' className="btn btn-danger"><i className="bi bi-play"></i>Trailor</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div >
                </div ></> : <></>}
        </>
    )
}

export default HomeCarousel