import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import './dashboard.css';


function Contact() {
    return (
      <div>
        {/* Header */}
        
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
              <h1 className="logo me-auto">
                <Link to="/">Enstone</Link>
              </h1>
              <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                  <li><Link  to="/">Home</Link></li>
                  <li><Link  to="/about">About</Link></li>
                  <li><Link to="/products">Products</Link></li>
                  
                  <li><Link to="/cart">Cart</Link></li>
                  
                  <li><Link className="active" to="/contact">Contact</Link></li>
                  <li><Link to="/signup">Log in</Link></li>
                  
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
              <Link to="/products" className="get-started-btn">Purchase</Link>
            </div>
          </header>
        {/* End Header */}
        
        

        <main id="main">
      {/* Breadcrumbs */}
      <div className="breadcrumbs" data-aos="fade-in">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
        </div>
      </div>
      {/* End Breadcrumbs */}

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div data-aos="fade-up">
          <iframe style={{ border: 0, width: '100%', height: 350 }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
        </div>

        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
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
  
  export default Contact;