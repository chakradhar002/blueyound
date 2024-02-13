import React from 'react';
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import aboutImage from '../assets/img/about.jpg';
import courseImage1 from '../assets/img/course-1.jpg';
import courseImage2 from '../assets/img/course-2.jpg';
import courseImage3 from '../assets/img/course-3.jpg';
import courseImage7 from '../assets/img/course-7.jpg';
import { Outlet, Link } from 'react-router-dom';
import Product from './Product2.jsx';
import prod from '../data3.js';

const Dashboard = () => {
  return (
    <>
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <a href="index.html">Upcouch</a>
            </h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <Link className="active" href="index.html">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/integrated'>Integrated</Link>
                </li>
                <li>
                  <Link  to='/product'>Individual</Link>
                </li>
                <li>
                  <Link href="events.html">Cart</Link>
                </li>
                <li>
                  <Link to='/signup'>Sign Up</Link>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <Link href="courses.html" className="get-started-btn">
              SHOP NOW
            </Link>
          </div>
        </header>

        <section id="hero" className="d-flex justify-content-center align-items-center">
          <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
            <h1>Designing Dreams<br/> Shaping Homes</h1>
            <h2>From our workshop to your living room, excellence in every detail</h2>
            <a href="courses.html" className="btn-get-started">
              SHOP NOW
            </a>
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
                  <h3>Discover Our Collection.</h3>
                  <p className="fst-italic">
                    Our furniture is designed not just to adorn your home but to provide a cozy retreat, inviting you to relax and unwind.
                  </p>
                  <ul>
                    <li><i className="bi bi-check-circle"></i> Explore the artistry behind our furniture.</li>
                    <li><i className="bi bi-check-circle"></i> Experience the perfect blend of style and comfort.</li>
                    <li><i className="bi bi-check-circle"></i> Embrace intelligent and space-saving designs.</li>
                  </ul>
                  <p>
                    Navigate the world of furniture with confidence. Explore our expert advice and guides, offering insights on trends, care tips, and choosing the right furniture for your home.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="popular-courses" className="courses">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Complete</h2>
                <p>Designes</p>
              </div>
              <div className="row" data-aos="zoom-in" data-aos-delay="100">
                <div className="col-lg-3 col-md-6">
                  <div className="course-item">
                      <img src={courseImage1} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Wooden</h4>
                        <p className="price">$230,000</p>
                      </div>
                      <p>Wooden furniture brings warmth and natural beauty to any space.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                  <div className="course-item">
                      <img src={courseImage2} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Marble</h4>
                        <p className="price">$250,000</p>
                      </div>
                      <p>Marble furniture adds a touch of sophistication to interiors.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                  <div className="course-item">
                      <img src={courseImage3} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Bamboo</h4>
                        <p className="price">$180,000</p>
                      </div>
                      <p>Bamboo furniture is lightweight and has a natural, organic appeal.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                  <div className="course-item">
                      <img src={courseImage7} className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Glass</h4>
                        <p className="price">$330,000</p>
                      </div>
                      <p>Glass furniture creates a sense of openness in a space.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="trainers" className="trainers">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Individual</h2>
                <p>Products</p>
              </div>
              <Product data={prod} />
            </div>
          </section>
        </main>

        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Mentor</h3>
                  <p>
                    A108 Adam Street <br />
                    New York, NY 535022<br />
                    United States <br /><br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
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
              <div className="copyright">
                &copy; Copyright <strong><span>Mentor</span></strong>. All Rights Reserved
              </div>
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
        <Outlet />
    </>
  );
};

export default Dashboard;
