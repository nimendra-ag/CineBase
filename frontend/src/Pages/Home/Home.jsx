import React from 'react'

const Home = () => {
  return (
    // <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img src="https://picsum.photos/1920/1080" className="d-block w-100" alt="..." />
    //     </div>
    //     <div className="carousel-item">
    //       <img src="https://picsum.photos/1920/1080?blur" className="d-block w-100" alt="..." />
    //     </div>
    //     <div className="carousel-item">
    //       <img src="https://picsum.photos/1920/1080?grayscale" className="d-block w-100" alt="..." />
    //     </div>
    //   </div>
    //   <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //   </a>
    //   <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //   </a>
    // </div>
    <>
      <div class="section">
        <div class="container-fluid1">
          <div id="carouselExampleDark" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="3000">
                <img src="https://picsum.photos/1920/980" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block text-start">
                    <div>
                      <h6>New Releases</h6>
                      <h1>Titanic</h1>
                      <h4>Leonardo Decaprio, Kate Winslet</h4>
                      <h4>7.3 IMDB Score </h4>
                      <h4> Romance, Action</h4>
                      <p>Some representative placeholder content for the first Lorem, ipsum dolor sit
                        amet consectetur adipisicing elit. Nostrum in hic earum numquam ipsum
                        impedit vitae facilis natus sed doloribus?
                    </p>
                    <button type="button" class="btn btn-primary btn-lg">Large button</button>
                  </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="https://picsum.photos/1920/980?blur" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block text-start">
                  <div>
                    <h6>New Releases</h6>
                    <h1>Titanic</h1>
                    <h4>Leonardo Decaprio, Kate Winslet</h4>
                    <h4>7.3 IMDB Score </h4>
                    <h4> Romance, Action</h4>
                    <p>Some representative placeholder content for the first Lorem, ipsum dolor sit
                      amet consectetur adipisicing elit. Nostrum in hic earum numquam ipsum
                      impedit vitae facilis natus sed doloribus?
                  </p>
                  <button type="button" class="btn btn-primary btn-lg">Large button</button>
                </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="https://picsum.photos/1920/980?grayscale" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block text-start">
                <div>
                  <h6>New Releases</h6>
                  <h1>Titanic</h1>
                  <h4>Leonardo Decaprio, Kate Winslet</h4>
                  <h4>7.3 IMDB Score </h4>
                  <h4> Romance, Action</h4>
                  <p>Some representative placeholder content for the first Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit. Nostrum in hic earum numquam ipsum
                    impedit vitae facilis natus sed doloribus?
                </p>
                <button type="button" class="btn btn-primary btn-lg">Large button</button>
              </div>
          </div>
        </div>
      </div>


    </div >
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div >
            </div >
    </>


  )
}

export default Home