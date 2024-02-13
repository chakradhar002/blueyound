import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../header';
import { Link } from 'react-router-dom';
// import Footer from '../Footer';
import PureCounter from '@srexi/purecounterjs';

function Dashboard (){
    useEffect(() => {
        AOS.init();
        new PureCounter();
    }, []);
    return (
        <>
            <Header />

          <section id="hero" className="d-flex justify-content-center align-items-center">
              <div className="container position-relative"  data-aos-delay="100">
              <h1>Discover the beauty of manga<br/>let your imagination run wild.</h1>
              <h2>Experience the magic and get lost in a world of endless possibilities.</h2>
              <Link to = "Signup" className="btn-get-started">Get Started</Link>
              </div>
          </section>
    
          <main id="main">
              <section id="about" className="about">
                  <div className="container" data-aos="fade-up">
    
                      <div className="row">
                      <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                          <img src="assets/img/81_inr.jpg" className="img-fluid" alt=""/>
                      </div>
                      <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                          <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                          <p className="fst-italic">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                          </p>
                          <ul>
                          <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                          <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                          <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                          </ul>
                          <p>
                          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          </p>
    
                      </div>
                      </div>
    
                  </div>
              </section>
    
              <section id="counts" className="counts section-bg">
                  <div className="container">
    
                      <div className="row counters">
    
                      <div className="col-lg-3 col-6 text-center">
                          <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" className="purecounter"></span>
                          <p>Mangas</p>
                      </div>
    
                      <div className="col-lg-3 col-6 text-center">
                          <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" className="purecounter"></span>
                          <p>BoxSets</p>
                      </div>
    
                      <div className="col-lg-3 col-6 text-center">
                          <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter"></span>
                          <p>Light Novels</p>
                      </div>
    
                      <div className="col-lg-3 col-6 text-center">
                          <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                          <p>Award Winners</p>
                      </div>
    
                      </div>
    
                  </div>
              </section>
    
              {/* <section id="why-us" className="why-us">
                  <div className="container" data-aos="fade-up">
    
                      <div className="row">
                      <div className="col-lg-4 d-flex align-items-stretch">
                          <div className="content">
                          <h3>Why Choose BuyIt?</h3>
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                              Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                          </p>
                          <div className="text-center">
                              <Link to = "aboutus" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></Link>
                          </div>
                          </div>
                      </div>
                      <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                          <div className="icon-boxes d-flex flex-column justify-content-center">
                          <div className="row">
                              <div className="col-xl-4 d-flex align-items-stretch">
                              <div className="icon-box mt-4 mt-xl-0">
                                  <i className="bx bx-receipt"></i>
                                  <h4>Corporis voluptates sit</h4>
                                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                              </div>
                              </div>
                              <div className="col-xl-4 d-flex align-items-stretch">
                              <div className="icon-box mt-4 mt-xl-0">
                                  <i className="bx bx-cube-alt"></i>
                                  <h4>Ullamco laboris ladore pan</h4>
                                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                              </div>
                              </div>
                              <div className="col-xl-4 d-flex align-items-stretch">
                              <div className="icon-box mt-4 mt-xl-0">
                                  <i className="bx bx-images"></i>
                                  <h4>Labore consequatur</h4>
                                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                              </div>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
    
              </div>
              </section> */}
    
    
              <section id="features" className="features">
              <div className="container" data-aos="fade-up">
    
                  <div className="row" data-aos="zoom-in" data-aos-delay="100">
                  <div className="col-lg-3 col-md-4">
                      <div className="icon-box">
                      <i className="ri-store-line" style={{color: "#ffbb2c"}}></i>
                      <h3><Link to = "">Best Sellers</Link></h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                      <div className="icon-box">
                      <i className="ri-bar-chart-box-line" style={{color: "#5578ff"}}></i>
                      <h3><Link to = "">Awars Winners</Link></h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                      <div className="icon-box">
                      <i className="ri-calendar-todo-line" style={{color: "#e80368"}}></i>
                      <h3><Link to = "">Box Sets</Link></h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                      <div className="icon-box">
                      <i className="ri-paint-brush-line" style={{color: "#e361ff"}}></i>
                      <h3><Link to = "">International Bestsellers</Link></h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                      <i className="ri-database-2-line" style={{color: "#47aeff"}}></i>
                      <h3><Link to = "">New Arrivals</Link></h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                      <i className="ri-gradienter-line" style={{color: "#ffa76e"}}></i>
                      <h3><Link to = "">Fiction Books</Link></h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                      <i className="ri-file-list-3-line" style={{color: "#11dbcf"}}></i>
                      <h3><Link to = "">Today's Deal</Link></h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                      <i className="ri-price-tag-2-line" style={{color: "#4233ff"}}></i>
                      <h3><Link to = "">Romance</Link></h3>
                      </div>
                  </div>
                  {/* <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                      <i className="ri-anchor-line" style={{color: "#b2904f"}}></i>
                      <h3><Link to = "">Dirada Pack</Link></h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                      <i className="ri-disc-line" style={{color: "#b20969"}}></i>
                      <h3><Link to = "">Moton Ideal</Link></h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                      <i className="ri-base-station-line" style={{color: "#ff5828"}}></i>
                      <h3><Link to = "">Verdo Park</Link></h3>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mt-4">
                      <div className="icon-box">
                      <i className="ri-fingerprint-line" style={{color: "#29cc61"}}></i>
                      <h3><Link to = "">Flavor Nivelanda</Link></h3>
                      </div>
                  </div> */}
                  </div>
    
              </div>
              </section>
    
              <section id="popular-courses" className="courses">
              <div className="container" data-aos="fade-up">
    
                  <div className="section-title">
                  <h2>MANGAS</h2>
                  <p>Popular Mangas</p>
                  </div>
    
                  <div className="row" data-aos="zoom-in" data-aos-delay="100">
    
                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                      <div className="course-item">
                      <img src="assets/img/popular-1.jpg"  alt="..." />
                      <div className="course-content">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                          <h4>BUY</h4>
                          <p className="price">$169</p>
                          </div>
    
                          <h3><Link to = "">One Piece</Link></h3>
                          <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                          <div className="trainer d-flex justify-content-between align-items-center">
                          
                          <div className="trainer-rank d-flex align-items-center">
                              <i className="bx bx-user"></i>&nbsp;50
                              &nbsp;&nbsp;
                              <i className="bx bx-heart"></i>&nbsp;65
                          </div>
                          </div>
                      </div>
                      </div>
                  </div> 
    
                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                      <div className="course-item">
                      <img src="assets/img/popular-2.jpg"  alt="..." />
                      <div className="course-content">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                          <h4>BUY</h4>
                          <p className="price">$250</p>
                          </div>
    
                          <h3><Link to = "">Bleach</Link></h3>
                          <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                          <div className="trainer d-flex justify-content-between align-items-center">
                          
                          <div className="trainer-rank d-flex align-items-center">
                              <i className="bx bx-user"></i>&nbsp;35
                              &nbsp;&nbsp;
                              <i className="bx bx-heart"></i>&nbsp;42
                          </div>
                          </div>
                      </div>
                      </div>
                  </div> 
    
                  <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                      <div className="course-item">
                      <img src="assets/img/popular-3.jpg"  alt="..." />
                      <div className="course-content">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                          <h4>BUY</h4>
                          <p className="price">$180</p>
                          </div>
    
                          <h3><Link to = "">Haikyuu</Link></h3>
                          <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                          <div className="trainer d-flex justify-content-between align-items-center">
                          
                          <div className="trainer-rank d-flex align-items-center">
                              <i className="bx bx-user"></i>&nbsp;20
                              &nbsp;&nbsp;
                              <i className="bx bx-heart"></i>&nbsp;85
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
    
                  </div>
    
              </div>
              </section>
    
              {/* <section id="trainers" className="trainers">
            <div className="container" data-aos="fade-up">
    
              <div className="row" data-aos="zoom-in" data-aos-delay="100">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="member">
                    <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt="" />
                    <div className="member-content">
                      <h4>Walter White</h4>
                      <span>Web Development</span>
                      <p>
                        Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                      </p>
                      <div className="social">
                        <Link to = ""><i className="bi bi-twitter"></i></Link>
                        <Link to = ""><i className="bi bi-facebook"></i></Link>
                        <Link to = ""><i className="bi bi-instagram"></i></Link>
                        <Link to = ""><i className="bi bi-linkedin"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="member">
                    <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt="" />
                    <div className="member-content">
                      <h4>Sarah Jhinson</h4>
                      <span>Marketing</span>
                      <p>
                        Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                      </p>
                      <div className="social">
                        <Link to = ""><i className="bi bi-twitter"></i></Link>
                        <Link to = ""><i className="bi bi-facebook"></i></Link>
                        <Link to = ""><i className="bi bi-instagram"></i></Link>
                        <Link to = ""><i className="bi bi-linkedin"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
    
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="member">
                    <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt="" />
                    <div className="member-content">
                      <h4>William Anderson</h4>
                      <span>Content</span>
                      <p>
                        Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                      </p>
                      <div className="social">
                        <Link to = ""><i className="bi bi-twitter"></i></Link>
                        <Link to = ""><i className="bi bi-facebook"></i></Link>
                        <Link to = ""><i className="bi bi-instagram"></i></Link>
                        <Link to = ""><i className="bi bi-linkedin"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
    
              </div>
    
            </div>
              </section> */}
          </main>
    
          <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
    
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>BuyIt</h3>
                                <p>
                                A108 Adam Street <br/>
                                New York, NY 535022<br/>
                                United States <br/><br/>
                                <strong>Phone:</strong> +1 5589 55488 55<br/>
                                <strong>Email:</strong> info@example.com<br/>
                                </p>
                            </div>
    
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to = "#">Home</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to = "#">About us</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to = "#">Services</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to = "#">Terms of service</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to = "#">Privacy policy</Link></li>
                                </ul>
                            </div>
    
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Best Sellers</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to = "#">One Piece</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to = "#">Jujutsu Kaisen</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to = "#">Naruto</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to = "#">Solo Leveling</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to = "#">Demon Slayer</Link></li>
                                </ul>
                            </div>
    
                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                <input type="email" name="email"/><input type="submit" value="Subscribe" />
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
                        Designed by <Link to = "https://bootstrapmade.com/">BootstrapMade</Link>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <Link to = "#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                        <Link to = "#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                        <Link to = "#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                        <Link to = "#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                        <Link to = "#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                    </div>
                </div>
        </footer>
        </>
      );

};

export default Dashboard;