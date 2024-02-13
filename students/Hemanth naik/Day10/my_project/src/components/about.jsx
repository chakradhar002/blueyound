import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutImage from '../assets/img/about.jpg';
import testimonialImg from '../assets/img/testimonials/testimonials-1.jpg';
import testimonial2Img from '../assets/img/testimonials/testimonials-2.jpg';
import { Link, Outlet } from 'react-router-dom';
import './dashboard.css';


function About() {
  return (
    <div>
      {/* Header */}
      
      <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <a href="index.html">Enstone</a>
            </h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li><Link  to="/">Home</Link></li>
                <li><Link className="active" to="/about">About</Link></li>
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
      {/* End Header */}
      
      {/* Main content */}
      <main id="main">
        {/* Breadcrumbs */}
        <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>About Us</h2>
            <p>In the marble business, it's not just about selling stone; it's about selling dreams and aspirations carved into reality.</p>
          </div>
        </div>
        {/* End Breadcrumbs */}
        
        {/* About Section */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              {/* Image Column */}
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src={aboutImage} className="img-fluid" alt="" />
              </div>
              {/* Content Column */}
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>Welcome to Enstone, your premier destination for exquisite marble products.</h3>
                <p className="fst-italic">Enstone's journey started with a fascination for marble's allure, evolving from passion to a thriving business sharing its beauty.</p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> Discover marble's beauty with expert guidance in our curated space.</li>
                  <li><i className="bi bi-check-circle"></i> Elevate spaces with marble's timeless elegance in various applications.</li>
                  <li><i className="bi bi-check-circle"></i> Enhance property value with marble, symbolizing luxury and prestige.</li>
                </ul>
                <p>
                  <h5>Our Mission</h5>
                  Our mission at Enstone is simple: to provide our customers with unparalleled quality and service. We are committed to sourcing the finest marble and using advanced techniques to transform raw stone into breathtaking creations.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}


        <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Testimonials</h2>
          <p>What are they saying</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                <img src={testimonialImg} className="img-fluid" alt="" />

                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    In the marble business, every cut is a creation, every polish is a perfection, and every installation is a celebration of craftsmanship.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>{/* End testimonial item */}

            <div className="swiper-slide">
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                <img src={testimonial2Img} className="img-fluid" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    In the realm of architecture and design, marble isn't just a material; it's a muse, inspiring creations that stand the test of time.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>{/* End testimonial item */}

            {/* More testimonials go here */}

          </div>
          <div className="swiper-pagination"></div>
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
                  <h4>Join Our Enstone</h4>
                  <p>Join us in our journey towards excellence, where every challenge is an opportunity to grow.</p>
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
      
    </div>
  );
}

export default About;
