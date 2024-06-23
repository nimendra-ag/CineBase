import React, { useEffect } from 'react'
import './Home.css'
import PopularInThisWeek from '../../Components/PopularInThisWeek/PopularInThisWeek'
import TVShowsComponent from '../../Components/TVShowsComponent/TVShowsComponent'
import PopularMoviesComponent from '../../Components/PopularMoviesComponent/PopularMoviesComponent'
import { useNavigate } from 'react-router-dom'


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

            <div className="row" style={{paddingTop:'140px', paddingBottom:'140px'}}>

              <div className="col-sm-12 col-lg-4">
                <div>
                  <img src="https://picsum.photos/500/300" className="img-fluid mx-auto d-block" />
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

            <div className="row" style={{paddingTop:'140px', paddingBottom:'140px'}}>

              <div className="col-sm-12 col-lg-8">
                <div>
                  <h1 className='text-center' style={{ fontSize: '45px' }}>Review Movies</h1>
                  <p className="h4 pt-2 text-center">Share your thoughts and opinions by reviewing movies. Rate your favorites and provide feedback to help other users discover new films.
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-lg-4">
                <div>
                  <img src="https://picsum.photos/500/300" className="img-fluid mx-auto d-block" />
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

        <div className="section text-white"
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.827), rgba(0, 0, 0, 0.8)), url(https://picsum.photos/1920/1080)' }}>
          <div className="container p-5" id="partners">
            <div className="row">
              <div className="col-md-12">
                <div className="mt-3 mb-3 text-center">
                  <h1 style={{ marginBottom: "50px" }}>User Feedback: Shaping Success Stories</h1>
                  <p>Discover the impact of FinWisse courses through the eyes of our users. Their stories speak volumes about the transformative power of our educational offerings.
                    From newfound financial confidence to practical application in real-life scenarios, our users' feedback is a testament to the effectiveness of our courses.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "50px" }}>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                <div className="wallstyle">
                  <h3>Pattric McMilan</h3>
                  <p>From Australia</p>
                  <img src="https://picsum.photos/500/300" className="img-fluid mx-auto d-block" style={{ marginBottom: "20px" }} />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex, molestias optio
                    dolore
                    illum
                    provident voluptatem eum ipsam vel fuga iste, sed vero magnam neque aut nihil odit
                    culpa
                    aliquam.
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                <div className="wallstyle">
                  <h3>Phillip Jane</h3>
                  <p>From USA</p>
                  <img src="https://picsum.photos/500/300" className="img-fluid mx-auto d-block" style={{ marginBottom: "20px" }} />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex, molestias optio
                    dolore
                    illum
                    provident voluptatem eum ipsam vel fuga iste, sed vero magnam neque aut nihil odit
                    culpa
                    aliquam.
                  </p>
                </div>
              </div>

              <div className="col-12  col-sm-6 col-md-4 col-lg-2">
                <div className="wallstyle">
                  <h3>Harry Kane</h3>
                  <p>From UK</p>
                  <img src="https://picsum.photos/500/300" className="img-fluid mx-auto d-block" style={{ marginBottom: "20px" }} />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex, molestias optio
                    dolore
                    illum
                    provident voluptatem eum ipsam vel fuga iste, sed vero magnam neque aut nihil odit
                    culpa
                    aliquam.
                  </p>
                </div>
              </div>

              <div className="col-12  col-sm-6 col-md-4 col-lg-2">
                <div className="wallstyle">
                  <h3>Gaurav Datt</h3>
                  <p>From India</p>
                  <img src="https://picsum.photos/500/300" className="img-fluid mx-auto d-block" style={{ marginBottom: "20px" }} />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex, molestias optio
                    dolore
                    illum
                    provident voluptatem eum ipsam vel fuga iste, sed vero magnam neque aut nihil odit
                    culpa
                    aliquam.
                  </p>
                </div>
              </div>

              <div className="col-12  col-sm-6 col-md-4 col-lg-2">
                <div className="wallstyle">
                  <h3>Cheon Lin Chin</h3>
                  <p>From China</p>
                  <img src="https://picsum.photos/500/300" className="img-fluid mx-auto d-block" style={{ marginBottom: "20px" }} />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex, molestias optio
                    dolore
                    illum
                    provident voluptatem eum ipsam vel fuga iste, sed vero magnam neque aut nihil odit
                    culpa
                    aliquam.
                  </p>
                </div>
              </div>

              <div className="col-12  col-sm-6 col-md-4 col-lg-2">
                <div className="wallstyle">
                  <h3>Mustaf Kaif</h3>
                  <p>From UAE</p>
                  <img src="https://picsum.photos/500/300" className="img-fluid mx-auto d-block" style={{ marginBottom: "20px" }} />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex, molestias optio
                    dolore
                    illum
                    provident voluptatem eum ipsam vel fuga iste, sed vero magnam neque aut nihil odit
                    culpa
                    aliquam.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      <section>

        <div className="section" style={{ marginBottom: "30px" }}>
          <div className="container p-5" id="contact">
            <div className="row">
              <div className="col-md-12">
                <div className="mt-5 text-center">
                  <h1>Feel free to contact us...</h1>
                  <br />
                  <hr />
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-sm-6">
                <div className="">

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="bi bi-whatsapp"></i> &nbsp;+94 112 222 333</li>
                    <li className="list-group-item"><i className="bi bi-telegram"></i> &nbsp;+94 777 888 999</li>
                    <li className="list-group-item"><i className="bi bi-skype"></i>&nbsp; +94 777 888 999</li>
                    <li className="list-group-item"><i className="bi bi-telephone-fill"></i>&nbsp; +94 777 888 999</li>
                    <li className="list-group-item"><i className="bi bi-envelope"></i> &nbsp;info@finwise.com</li>

                  </ul>

                </div>

                <div className="overlay-container">
                  <img src="images/qr.jpg" alt="" />
                </div>

              </div>
              <div className="col-sm-6">
                <div className="">
                  <form role="form" id="footer-form" action="mail-it.php" method="post">
                    <div className="form-group mb-3">
                      <label className="sr-only" for="name2">Name</label>
                      <input type="text" className="form-control" id="name2" placeholder="Name"
                        name="name2" required />

                    </div>
                    <div className="form-group mb-3">
                      <label className="sr-only" for="email2">Email address</label>
                      <input type="email" className="form-control" id="email2" placeholder="Enter email"
                        name="email2" required />

                    </div>
                    <div className="form-group mb-3">
                      <label className="sr-only" for="message2">Message</label>
                      <textarea className="form-control" rows="5" id="message2" placeholder="Message"
                        name="message2" required></textarea>

                    </div>
                    <input type="submit" value="Send" className="btn btn-primary" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <div>
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-6 col-md-2 mb-1">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
              </div>

              <div className="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label for="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>&copy; 2024 Company, Inc. All rights reserved.</p>
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