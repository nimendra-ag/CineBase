import React from 'react'
import './Home.css'
const Home = () => {
  return (

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
                <img src="https://picsum.photos/1920/980" class="d-block w-100" alt="..." />
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
                <img src="https://picsum.photos/1920/980?blur" class="d-block w-100" alt="..." />
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
                <img src="https://picsum.photos/1920/980?grayscale" class="d-block w-100" alt="..." />
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

      <section>

        <div class="section">
          <div class="container p-5" id="about">
            <div class="row">
              <div class="col-md-12">
                <div class="mt-5 text-center">
                  <h1>Welcome to <span class="text-danger">"Company"</span></h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus
                    reiciendis,
                    quibusdam laborum porro delectus ipsam nisi distinctio, impedit temporibus minima
                    ullam, fugiat ut vero
                    accusantium voluptas dolores quam. Eaque!
                  </p>
                  <hr />
                </div>
              </div>
            </div>

            <div class="row">

              <div class="col-sm-12 col-lg-4">
                <div class="bg-light p-2">
                  <img src="https://picsum.photos/500/300" class="img-fluid mx-auto d-block" />
                </div>
              </div>

              <div class="col-sm-12 col-lg-8">
                <div class="bg-light p-2">
                  <h4>About Us</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorum unde
                    exercitationem, blanditiis minus dolore explicabo reprehenderit suscipit harum iste
                    eius architecto tempora quam quae id. Ipsa ratione quos officia.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolorum unde
                    exercitationem, blanditiis minus dolore explicabo reprehenderit suscipit harum iste
                    eius architecto tempora quam quae id. Ipsa ratione quos officia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid text-center bg-dark text-lidgt p-3">

          <div class="row">
            <div class="col-md-12">
              <h1><span class="text-danger">100% QUALITY SERVICES</span></h1>
            </div>
          </div>

        </div>

      </section>

      <section>

        <div class="section">
          <div class="container p-5" id="services">
            <div class="row">
              <div class="col-md-12">
                <div class="mt-5">
                  <h1 class="text-start">Popular in this week</h1>
                </div>
              </div>


            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="mt-5">
                  <div class="row">
                    <div class="col-sm-12 col-lg-12">

                      {/* <!--Bootstrap card--> */}
                      <div class="row row-cols-1 row-cols-md-4 g-3">
                        <div class="col col-md-4 col-lg-2 col-xl-2">
                          <div class="card h-100">
                            <img src="https://picsum.photos/300/440" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Spider Man</h5>
                              <p><i class="bi bi-star-fill"></i> 5.5</p>
                              <a href="#" class="btn btn-primary"><i class="bi bi-bookmark-plus"></i> Watchlist</a>
                            </div>
                            <div class="card-footer">
                            <a href="#" class="btn btn-primary"><i class="bi bi-play"></i> Trailor</a>

                            </div>
                          </div>
                        </div>
                        <div class="col col-md-4 col-lg-2 col-xl-2">
                          <div class="card h-100">
                            <img src="https://picsum.photos/300/440" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Spider Man</h5>
                              <p><i class="bi bi-star-fill"></i> 5.5</p>
                              <a href="#" class="btn btn-primary"><i class="bi bi-bookmark-plus"></i> Watchlist</a>
                            </div>
                            <div class="card-footer">
                            <a href="#" class="btn btn-primary"><i class="bi bi-play"></i> Trailor</a>

                            </div>
                          </div>
                        </div>
                        <div class="col col-md-4 col-lg-2 col-xl-2">
                          <div class="card h-100">
                            <img src="https://picsum.photos/300/440" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Spider Man</h5>
                              <p><i class="bi bi-star-fill"></i> 5.5</p>
                              <a href="#" class="btn btn-primary"><i class="bi bi-bookmark-plus"></i> Watchlist</a>
                            </div>
                            <div class="card-footer">
                            <a href="#" class="btn btn-primary"><i class="bi bi-play"></i> Trailor</a>

                            </div>
                          </div>
                        </div>
                        <div class="col col-md-4 col-lg-2 col-xl-2">
                          <div class="card h-100">
                            <img src="https://picsum.photos/300/440" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Spider Man</h5>
                              <p><i class="bi bi-star-fill"></i> 5.5</p>
                              <a href="#" class="btn btn-primary"><i class="bi bi-bookmark-plus"></i> Watchlist</a>
                            </div>
                            <div class="card-footer">
                            <a href="#" class="btn btn-primary"><i class="bi bi-play"></i> Trailor</a>

                            </div>
                          </div>
                        </div>
                        <div class="col col-md-4 col-lg-2 col-xl-2">
                          <div class="card h-100">
                            <img src="https://picsum.photos/300/440" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Spider Man</h5>
                              <p><i class="bi bi-star-fill"></i> 5.5</p>
                              <a href="#" class="btn btn-primary"><i class="bi bi-bookmark-plus"></i> Watchlist</a>
                            </div>
                            <div class="card-footer">
                            <a href="#" class="btn btn-primary"><i class="bi bi-play"></i> Trailor</a>

                            </div>
                          </div>
                        </div>
                        <div class="col col-md-4 col-lg-2 col-xl-2">
                          <div class="card h-100">
                            <img src="https://picsum.photos/300/440" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Spider Man</h5>
                              <p><i class="bi bi-star-fill"></i> 5.5</p>
                              <a href="#" class="btn btn-primary"><i class="bi bi-bookmark-plus"></i> Watchlist</a>
                            </div>
                            <div class="card-footer">
                            <a href="#" class="btn btn-primary"><i class="bi bi-play"></i> Trailor</a>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">

                <div class="mt-5">
                  <h1 class="text-start">Popular TV Shows</h1>
                </div>
              </div>


            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="mt-5">
                  <div class="row">
                    <div class="col-sm-12 col-lg-12">

                      {/* <!--Bootstrap card--> */}
                      <div class="row row-cols-1 row-cols-md-4 g-3">
                        <div class="col col-md-6 col-xl-3">
                          <div class="card h-100">
                            <img src="https://picsum.photos/500/300" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text
                                below as a natural lead-in to additional content. This
                                content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                              <small class="text-body-secondary">Last updated 3 mins
                                ago</small>
                            </div>
                          </div>
                        </div>
                        <div class="col col-md-6 col-xl-3">
                          <div class="card h-100">
                            <img src="https://picsum.photos/500/300" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This card has supporting text below as a
                                natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                              <small class="text-body-secondary">Last updated 3 mins
                                ago</small>
                            </div>
                          </div>
                        </div>
                        <div class="col col-md-6 col-xl-3">
                          <div class="card h-100">
                            <img src="https://picsum.photos/500/300" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text
                                below as a natural lead-in to additional content. This card
                                has even longer content than the first to show that equal
                                height action.</p>
                            </div>
                            <div class="card-footer">
                              <small class="text-body-secondary">Last updated 3 mins
                                ago</small>
                            </div>
                          </div>
                        </div>
                        <div class="col col-md-6 col-xl-3">
                          <div class="card h-100">
                            <img src="https://picsum.photos/500/300" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text
                                below as a natural lead-in to additional content. This card
                                has even longer content than the first to show that equal
                                height action.</p>
                            </div>
                            <div class="card-footer">
                              <small class="text-body-secondary">Last updated 3 mins
                                ago</small>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-5 mb-5 text-center">
              <button type="button" class="btn btn-primary">Primary</button>

            </div>

            <div class="row">
              <div class="col-md-12">

                <div class="mt-5">
                  <h1 class="text-start">Popular Movies</h1>
                </div>
              </div>


            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="mt-5">
                  <div class="row">
                    <div class="col-sm-12 col-lg-12">

                      {/* <!--Bootstrap card--> */}
                      <div class="row row-cols-1 row-cols-md-4 g-3">
                        <div class="col col-md-6 col-xl-3">
                          <div class="card h-100">
                            <img src="https://picsum.photos/500/300" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text
                                below as a natural lead-in to additional content. This
                                content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                              <small class="text-body-secondary">Last updated 3 mins
                                ago</small>
                            </div>
                          </div>
                        </div>
                        <div class="col col-md-6 col-xl-3">
                          <div class="card h-100">
                            <img src="https://picsum.photos/500/300" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This card has supporting text below as a
                                natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                              <small class="text-body-secondary">Last updated 3 mins
                                ago</small>
                            </div>
                          </div>
                        </div>
                        <div class="col col-md-6 col-xl-3">
                          <div class="card h-100">
                            <img src="https://picsum.photos/500/300" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text
                                below as a natural lead-in to additional content. This card
                                has even longer content than the first to show that equal
                                height action.</p>
                            </div>
                            <div class="card-footer">
                              <small class="text-body-secondary">Last updated 3 mins
                                ago</small>
                            </div>
                          </div>
                        </div>
                        <div class="col col-md-6 col-xl-3">
                          <div class="card h-100">
                            <img src="https://picsum.photos/500/300" class="card-img-top"
                              alt="..." />
                            <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a wider card with supporting text
                                below as a natural lead-in to additional content. This card
                                has even longer content than the first to show that equal
                                height action.</p>
                            </div>
                            <div class="card-footer">
                              <small class="text-body-secondary">Last updated 3 mins
                                ago</small>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-5 mb-5 text-center">
              <button type="button" class="btn btn-primary">Primary</button>

            </div>

          </div>
        </div>

      </section>

      <section>

        <div class="section text-white"
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.827), rgba(0, 0, 0, 0.8)), url(https://picsum.photos/1920/1080)' }}>
          <div class="container p-5" id="partners">
            <div class="row">
              <div class="col-md-12">
                <div class="mt-3 mb-3 text-center">
                  <h1 style={{ marginBottom: "50px" }}>User Feedback: Shaping Success Stories</h1>
                  <p>Discover the impact of FinWisse courses through the eyes of our users. Their stories speak volumes about the transformative power of our educational offerings.
                    From newfound financial confidence to practical application in real-life scenarios, our users' feedback is a testament to the effectiveness of our courses.
                  </p>
                </div>
              </div>
            </div>
            <div class="row" style={{ marginTop: "50px" }}>
              <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                <div class="wallstyle">
                  <h3>Pattric McMilan</h3>
                  <p>From Australia</p>
                  <img src="https://picsum.photos/500/300" class="img-fluid mx-auto d-block" style={{ marginBottom: "20px" }} />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex, molestias optio
                    dolore
                    illum
                    provident voluptatem eum ipsam vel fuga iste, sed vero magnam neque aut nihil odit
                    culpa
                    aliquam.
                  </p>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                <div class="wallstyle">
                  <h3>Phillip Jane</h3>
                  <p>From USA</p>
                  <img src="https://picsum.photos/500/300" class="img-fluid mx-auto d-block" style={{ marginBottom: "20px" }} />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex, molestias optio
                    dolore
                    illum
                    provident voluptatem eum ipsam vel fuga iste, sed vero magnam neque aut nihil odit
                    culpa
                    aliquam.
                  </p>
                </div>
              </div>

              <div class="col-12  col-sm-6 col-md-4 col-lg-2">
                <div class="wallstyle">
                  <h3>Harry Kane</h3>
                  <p>From UK</p>
                  <img src="https://picsum.photos/500/300" class="img-fluid mx-auto d-block" style={{ marginBottom: "20px" }} />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex, molestias optio
                    dolore
                    illum
                    provident voluptatem eum ipsam vel fuga iste, sed vero magnam neque aut nihil odit
                    culpa
                    aliquam.
                  </p>
                </div>
              </div>

              <div class="col-12  col-sm-6 col-md-4 col-lg-2">
                <div class="wallstyle">
                  <h3>Gaurav Datt</h3>
                  <p>From India</p>
                  <img src="https://picsum.photos/500/300" class="img-fluid mx-auto d-block" style={{ marginBottom: "20px" }} />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex, molestias optio
                    dolore
                    illum
                    provident voluptatem eum ipsam vel fuga iste, sed vero magnam neque aut nihil odit
                    culpa
                    aliquam.
                  </p>
                </div>
              </div>

              <div class="col-12  col-sm-6 col-md-4 col-lg-2">
                <div class="wallstyle">
                  <h3>Cheon Lin Chin</h3>
                  <p>From China</p>
                  <img src="https://picsum.photos/500/300" class="img-fluid mx-auto d-block" style={{ marginBottom: "20px" }} />
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex, molestias optio
                    dolore
                    illum
                    provident voluptatem eum ipsam vel fuga iste, sed vero magnam neque aut nihil odit
                    culpa
                    aliquam.
                  </p>
                </div>
              </div>

              <div class="col-12  col-sm-6 col-md-4 col-lg-2">
                <div class="wallstyle">
                  <h3>Mustaf Kaif</h3>
                  <p>From UAE</p>
                  <img src="https://picsum.photos/500/300" class="img-fluid mx-auto d-block" style={{ marginBottom: "20px" }} />
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

        <div class="section" style={{ marginBottom: "30px" }}>
          <div class="container p-5" id="contact">
            <div class="row">
              <div class="col-md-12">
                <div class="mt-5 text-center">
                  <h1>Feel free to contact us...</h1>
                  <br />
                  <hr />
                </div>
              </div>
            </div>
            <div class="row">

              <div class="col-sm-6">
                <div class="">

                  <ul class="list-group list-group-flush">
                    <li class="list-group-item"><i class="bi bi-whatsapp"></i> &nbsp;+94 112 222 333</li>
                    <li class="list-group-item"><i class="bi bi-telegram"></i> &nbsp;+94 777 888 999</li>
                    <li class="list-group-item"><i class="bi bi-skype"></i>&nbsp; +94 777 888 999</li>
                    <li class="list-group-item"><i class="bi bi-telephone-fill"></i>&nbsp; +94 777 888 999</li>
                    <li class="list-group-item"><i class="bi bi-envelope"></i> &nbsp;info@finwise.com</li>

                  </ul>

                </div>

                <div class="overlay-container">
                  <img src="images/qr.jpg" alt="" />
                </div>

              </div>
              <div class="col-sm-6">
                <div class="">
                  <form role="form" id="footer-form" action="mail-it.php" method="post">
                    <div class="form-group mb-3">
                      <label class="sr-only" for="name2">Name</label>
                      <input type="text" class="form-control" id="name2" placeholder="Name"
                        name="name2" required />

                    </div>
                    <div class="form-group mb-3">
                      <label class="sr-only" for="email2">Email address</label>
                      <input type="email" class="form-control" id="email2" placeholder="Enter email"
                        name="email2" required />

                    </div>
                    <div class="form-group mb-3">
                      <label class="sr-only" for="message2">Message</label>
                      <textarea class="form-control" rows="5" id="message2" placeholder="Message"
                        name="message2" required></textarea>

                    </div>
                    <input type="submit" value="Send" class="btn btn-primary" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <div>
        <div class="container">
          <footer class="py-5">
            <div class="row">
              <div class="col-6 col-md-2 mb-1">
                <h5>Section</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
              </div>

              <div class="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label for="newsletter1" class="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                    <button class="btn btn-primary" type="button">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>&copy; 2024 Company, Inc. All rights reserved.</p>
              <ul class="list-unstyled d-flex">
                <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter" /></svg></a></li>
                <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram" /></svg></a></li>
                <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook" /></svg></a></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>


  )
}

export default Home