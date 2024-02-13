import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutImage from '../assets/img/about.jpg';
import ItalianMarbleImage from '../assets/img/course-1.jpg';
import OnyxMarbleImage from '../assets/img/course-2.jpg';
import SatuarioMarbleImage from '../assets/img/course-3.jpg';
import TraventineMarbleImage from '../assets/img/course-4.jpg';
import FlawlessWhiteMarbleImage from '../assets/img/course-5.jpg';
import BlackMarbleImage from '../assets/img/black-marble.jpg';
import BlueMarbleImage from '../assets/img/Blue.jpg';
import PinkMarbleImage from '../assets/img/pink.jpg';
import BeigeMarbleImage from '../assets/img/biege.jpg';
import GreenMarbleImage from '../assets/img/green.jpg';
import WhiteMarbleImage from '../assets/img/white.jpg';
import RedMarbleImage from '../assets/img/red.jpg';
import GreyMarbleImage from '../assets/img/grey.jpg';



import './dashboard.css'
import { Link, Outlet } from 'react-router-dom';



function Dashboard() {
  return (
    <>
      
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <Link to ="/about">Enstone</Link>
            </h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                
                <li><Link to="/cart">Cart</Link></li>
                <li><Link  to="/contact">Contact</Link></li>
                <li><Link to="/signup">Log in</Link></li>
                
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <Link to="/products" className="get-started-btn">Purchase</Link>
          </div>
        </header>

        <section id="hero" className="d-flex justify-content-center align-items-center">
          <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
            <h1>Eternal classic,<br />Forever in Style</h1>
            <h2>The perfect blend of class and style with Uncompromising Quality.</h2>
            <Link to="/products" className="btn-get-started">Purchase Now</Link>
          </div>
        </section>

        <main id="main">
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src={aboutImage} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                  <h3>Welcome to Enstone, your premier destination for exquisite marble products.</h3>
                  <p className="fst-italic">
                    Enstone's journey started with a fascination for marble's allure, evolving from passion to a thriving business sharing its beauty.
                  </p>
                  <ul>
                    <li><i className="bi bi-check-circle"></i> Discover marble's beauty with expert guidance in our curated space.</li>
                    <li><i className="bi bi-check-circle"></i> Elevate spaces with marble's timeless elegance in various applications.</li>
                    <li><i className="bi bi-check-circle"></i> Enhance property value with marble, symbolizing luxury and prestige.</li>
                  </ul>
                  <p>
                    <h5>Our Mission</h5>
                    Our mission at [Your Marble Business Name] is simple: to provide our customers with unparalleled quality and service. We are committed to sourcing the finest marble and using advanced techniques to transform raw stone into breathtaking creations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="content">
                    <h3>Why Choose Enstone?</h3>
                    <p>Elevate your space with our elegant and timeless marbles sourced from the finest quarries worldwide. With unmatched quality, exquisite craftsmanship, and customizable options, experience luxury and sophistication with our exquisite selection</p>
                    <div className="text-center">
                      <a href="about.html" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <i className="bx bxs-cube-alt"></i>
                          <h4>Unrivaled Quality</h4>
                          <p>Globally sourced marble, guarantees unparalleled craftsmanship and enduring beauty in every piece.</p>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <i className='bx bxs-medal'></i>
                          <h4>Expertise & Experience</h4>
                          <p>With many years in the industry, our team guides you seamlessly from selection to installation.</p>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <i className='bx bxs-tree'></i>
                          <h4>Environmental Responsibility</h4>
                          <p>Ethically and Sustainably, contributing to a more environmentally conscious industry.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="popular-courses" className="courses">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Products</h2>
                <p>Popular Marbles</p>
              </div>
              <div className="row" data-aos="zoom-in" data-aos-delay="100">
                <div className="col-lg-4 col-md-6">
                  <div className="course-item">
                  <img src={ItalianMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Italian Marble</h4>
                        <p className="price">$169</p>
                      </div>
                      <h3><Link to="/products">Italian Marble</Link></h3>
                      <p>Undeniably, marble is a stunning natural stone that offers a classic look, timeless beauty, and unparalleled durability.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                  <div className="course-item">
                  <img src={OnyxMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Onyx Marble</h4>
                        <p className="price">$250</p>
                      </div>
                      <h3><Link to="/products">Onyx marble</Link></h3>
                      <p>Onyx Marble is acing the game of interior designing by slowly for anyone who wants to create a breathtaking impression.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                  <div className="course-item">
                  <img src={SatuarioMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Satuario Marble</h4>
                        <p className="price">$180</p>
                      </div>
                      <h3><Link to="/products">Satuario</Link></h3>
                      <p>Statuario marble is distinguished by its dazzling white natural marble, lovely grayish specks, and rich, dramatic patterns.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-5" data-aos="zoom-in" data-aos-delay="100">
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                  <div className="course-item">
                  <img src={TraventineMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Traventine Marble</h4>
                        <p className="price">$120</p>
                      </div>
                      <h3><Link to="/products">Traventine</Link></h3>
                      <p>Travertine is an elegant natural stone that has been used as a building material for centuries. The stone can be found in many different colors.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                  <div className="course-item">
                  <img src={FlawlessWhiteMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Flawless White Marble</h4>
                        <p className="price">$85</p>
                      </div>
                      <h3><Link to="/products">Flawless White</Link></h3>
                      <p>The Flawless White Marble boasts an astonishing clarity that magically expands the space-volume within an interior.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="Marble-Types" className="Types">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Marbles</h2>
                <p>Color Types</p>
              </div>
              <div className="row" data-aos="zoom-in" data-aos-delay="100">
                <div className="col-lg-3 col-md-6">
                  <div className="course-item">
                  <img src={BlackMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Black</h4>
                        <p className="price">$10</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                  <div className="course-item">
                  <img src={BlueMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Blue</h4>
                        <p className="price">$15</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                  <div className="course-item">
                  <img src={PinkMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Pink</h4>
                        <p className="price">$18</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                  <div className="course-item">
                  <img src={BeigeMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Beige</h4>
                        <p className="price">$13</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-5" data-aos="zoom-in" data-aos-delay="100">
                <div className="col-lg-3 col-md-6">
                  <div className="course-item">
                  <img src={GreenMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Green</h4>
                        <p className="price">$11</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                  <div className="course-item">
                  <img src={WhiteMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>White</h4>
                        <p className="price">$8</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                  <div className="course-item">
                  <img src={RedMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Red</h4>
                        <p className="price">$13</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                  <div className="course-item">
                  <img src={GreyMarbleImage} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Grey</h4>
                        <p className="price">$7</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Enstone</h3>
                  <p>A108 Adam Street <br /> New York, NY 535022<br /> United states <br /><br /><strong>Phone:</strong> +1 5589 55488 55<br /><strong>Email:</strong> info@example.com<br /></p>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of services</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Italian Marble</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Satuario Marble</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Flawless White Marble</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Onyx Marble</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Traventine Marble</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Join Our Newsletter</h4>
                  <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                  <form action="" method="post">
                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-md-flex py-4">
            <div className="me-md-auto text-center text-md-start">
              <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </footer>
        <Outlet/>
        {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        <div id="preloader"></div> */}

       
      
    </>
  );
}

export default Dashboard;
