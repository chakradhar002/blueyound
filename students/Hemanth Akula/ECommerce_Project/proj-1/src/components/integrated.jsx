import React, {useContext} from 'react';
import { Outlet, Link, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../App';


const Integrated = (props) => {
  const {cart} = useContext(UserContext);
  const navigate = useNavigate();

  const addToCart = (item) => {
    let h=0;
    for(let i=0;i<cart.current.length;i++){
      if(cart.current[i].item.id == item.id){
        h=1;
        cart.current[i].count++;
        continue;
      }
    }
    if(h==0)
    {    
      cart.current = [...cart.current,{item,count:1}];
    }
  };
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
                  <Link to='/'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="active" to='/integrated' >Integrated</Link>
                </li>
                <li>
                  <Link to='/product'>Individual</Link>
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

    <div id="main" data-aos="fade-in">

        
        <div class="breadcrumbs">
        <div class="">
            <h2>Complete Design and Delivery Services</h2>
            <p>Welcome to the heart of our craftsmanship – a curated collection that defines the essence of your home.</p>
        </div>
        </div>

        
        <section id="courses" class="courses">
        <div class="container" data-aos="fade-up">

            <div class="row" data-aos="zoom-in" data-aos-delay="100">
            {
              props.data.integData.map((course) => (
                <div key={course.id} class="col-lg-3 col-md-6 my-3">
                    <div class="course-item position-relative">
                        <img src={course.image} class="img-fluid" alt="..."/>
                        <div class="course-content mb-2">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4>{course.name}</h4>
                                <p class="price">${course.Price}</p>
                            </div>
                            <p>{course.role}</p>
                        </div>
                        <div class="position-absolute bottom-0 end-0">
                            <button type="button" className="btn btn-light border border-1.5"
                              onClick={() => {
                                addToCart(course);
                                navigate('/cart');
                              }}
                            >
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                        </div>
                    </div>
                </div>
              ))
            }
            </div>

        </div>
        </section>

    </div>

    
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

        {/* <div id="preloader"></div>
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a> */}
    </>
  );
};

export default Integrated;
