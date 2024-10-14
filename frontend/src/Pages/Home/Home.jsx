import React, { useEffect } from 'react'
import './Home.css'
import PopularInThisWeek from '../../Components/PopularInThisWeek/PopularInThisWeek'
import TVShowsComponent from '../../Components/TVShowsComponent/TVShowsComponent'
import PopularMoviesComponent from '../../Components/PopularMoviesComponent/PopularMoviesComponent'
import { useNavigate } from 'react-router-dom'
import FeedbackForm from '../../Components/FeedBackForm/FeedbackForm'
import FeedbackItem from '../../Components/FeedbackItem/FeedbackItem'
import FeedbackSection from '../../Components/FeedbackSeciton/FeedbackSection'
import SubscribeToNewsletter from '../../Components/SubscribeToNewsletter/SubscribeToNewsletter'
import homeimage1 from '../../assets/Images/home1.png'
import homeimage2 from '../../assets/Images/home2.png'

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
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
                <img src="https://picsum.photos/1920/980" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-start">
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
                    <button type="button" className="btn btn-primary btn-lg">Large button</button>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src="https://picsum.photos/1920/980?blur" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-start">
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
                    <button type="button" className="btn btn-primary btn-lg">Large button</button>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src="https://picsum.photos/1920/980?grayscale" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-start">
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
                    <button type="button" className="btn btn-primary btn-lg">Large button</button>
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
      </div >

      <section>

        <div className="section">
          <div className="container p-5" id="about">
            <div className="row pb-5">
              <div className="col-md-12">
                <div className="mt-5 text-center">
                  <h1 style={{ fontSize: '60px' }}>Enjoy on your TV</h1>
                  <p className="h4 pt-4">
                    Get detailed information about your favorite movies right on your TV.
                    Explore cast, crew, synopses, and reviews with ease...
                  </p>

                </div>
              </div>
            </div>

            <hr style={{ borderWidth: '4px', color: 'white' }} />

            <div className="row" style={{ paddingTop: '140px', paddingBottom: '140px' }}>

              <div className="col-sm-12 col-lg-4">
                <div>
                  <img src={homeimage1} className="img-fluid mx-auto d-block" />
                </div>
              </div>

              <div className="col-sm-12 col-lg-8">
                <div>
                  <h1 className='text-center' style={{ fontSize: '45px' }}>Save to Watchlist</h1>
                  <p className="h4 pt-2 text-center">Easily save your favorite movies to your watchlist for quick access later. Keep track of what you want to watch next with just a click.
                  </p>
                </div>
              </div>
            </div>
            <hr style={{ borderWidth: '4px', color: 'white' }} />
            <div className="row" style={{ paddingTop: '140px', paddingBottom: '140px' }}>
              <div className="col-sm-12 col-lg-8">
                <div>
                  <h1 className='text-center' style={{ fontSize: '45px' }}>Review Movies</h1>
                  <p className="h4 pt-2 text-center">Share your thoughts and opinions by reviewing movies. Rate your favorites and provide feedback to help other users discover new films.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-lg-4">
                <div>
                  <img src={homeimage2} className="img-fluid mx-auto d-block" />
                </div>
              </div>
            </div>
            <hr style={{ borderWidth: '4px', color: 'white' }} />
          </div>
        </div>
      </section>

      <section>

        <div className="section">
          <div className="container p-2" id="services">
            <PopularInThisWeek />
            <TVShowsComponent />
            <PopularMoviesComponent />
          </div>
        </div>

      </section>

      <section>
      <FeedbackSection/>
        
      </section>

      <section>

        <div className="section" style={{ marginBottom: "30px" }}>
          <div className="container p-5" id="contact">
            <div className="row">
              <div className="col-md-12">
                <div className="mt-5 text-center">
                  <h1>We value your feedback</h1>
                  <br />
                  <hr style={{ borderWidth: '4px', color: 'white' }} className='pb-4' />
                </div>
              </div>
            </div>
            <div className="row">
              <FeedbackForm />
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="container border-top">
          <footer className="py-5">
            <div className="row">
              <div className="col-6 col-md-2 mb-1">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Home</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Features</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Pricing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">FAQs</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">About</a></li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Home</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Features</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Pricing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">FAQs</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">About</a></li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3 text">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Home</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Features</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">Pricing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">FAQs</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white-50">About</a></li>
                </ul>
              </div>

              <div className="col-md-5 offset-md-1 mb-3">

                <SubscribeToNewsletter/>

              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>&copy; 2024 CineBase, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter" /></svg></a></li>
                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram" /></svg></a></li>
                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook" /></svg></a></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>


  )
}

export default Home