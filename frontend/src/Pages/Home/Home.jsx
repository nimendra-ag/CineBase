import React from 'react'

const Home = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://picsum.photos/1920/1080" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/1920/1080?blur" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/1920/1080?grayscale" className="d-block w-100" alt="..." />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>


  )
}

export default Home