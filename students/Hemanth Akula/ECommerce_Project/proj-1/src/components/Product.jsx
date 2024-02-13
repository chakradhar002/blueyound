import React, { useState, useEffect, useContext } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../App';


  

function Product(props) {

  const td = props.data;
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
                  <Link to='/integrated' >Integrated</Link>
                </li>
                <li>
                  <Link className="active" to='/product'>Individual</Link>
                </li>
                <li>
                  <Link to='/cart'>Cart</Link>
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

        <main id="main" data-aos="fade-in">

            <div class="breadcrumbs">
                <div class="container">
                    <h2>Individual Products</h2>
                    <p>Explore our diverse range of meticulously crafted furniture that seamlessly blends style and functionality.</p>
                </div>
            </div>
            <section id="trainers" class="trainers">
                <div class="container" data-aos="fade-up">

                    <div className="row align-content-center justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                        {td.trainersData1.map(trainer => (
                            <div key={trainer.id} className="col-lg-3 col-md-6">
                            <div className="member" style={{ position: 'relative', overflow: 'hidden' }}>
                                <img src={trainer.image} className="img-fluid" alt=""/>
                                <div className="member-content">
                                  <h5 className="font-weight-normal">{trainer.name}</h5>
                                  {/* <span>{trainer.role}</span> */}
                                  <p className="mt-2">{trainer.Price}</p>
                                    <button
                                      type="button"
                                      className="btn btn-light border border-1 position-absolute mb-2 bottom-0 end-0 me-2"
                                      onClick={() => {
                                        addToCart(trainer);
                                        navigate('/cart');
                                      }}
                                    >
                                      <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="row align-content-center justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                        {props.data.trainersData2.map(trainer => (
                            <div key={trainer.id} className="col-lg-3 col-md-6">
                            <div className="member" style={{ position: 'relative', overflow: 'hidden' }}>
                                <img src={trainer.image} className="img-fluid" alt=""/>
                                <div className="member-content">
                                  <h5 className="font-weight-normal">{trainer.name}</h5>
                                  {/* <span>{trainer.role}</span> */}
                                  <p className="mt-2">{trainer.Price}</p>
                                    <button
                                      type="button"
                                      className="btn btn-light border border-1 position-absolute mb-2 bottom-0 end-0 me-2"
                                      onClick={() => {
                                        // Add the current trainer to the cart
                                        addToCart(trainer);
                                        // Navigate to the cart page
                                        navigate('/cart');
                                      }}
                                    >
                                      <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="row align-content-center justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                        {props.data.trainersData3.map(trainer => (
                            <div key={trainer.id} className="col-lg-3 col-md-6">
                            <div className="member" style={{ position: 'relative', overflow: 'hidden' }}>
                                <img src={trainer.image} className="img-fluid" alt=""/>
                                <div className="member-content">
                                  <h5 className="font-weight-normal">{trainer.name}</h5>
                                  {/* <span>{trainer.role}</span> */}
                                  <p className="mt-2">{trainer.Price}</p>
                                    <button
                                      type="button"
                                      className="btn btn-light border border-1 position-absolute mb-2 bottom-0 end-0 me-2"
                                      onClick={() => {
                                        addToCart(trainer);
                                        navigate('/cart');
                                      }}
                                    >
                                      <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="row align-content-center justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                        {props.data.trainersData4.map(trainer => (
                            <div key={trainer.id} className="col-lg-3 col-md-6">
                            <div className="member" style={{ position: 'relative', overflow: 'hidden' }}>
                                <img src={trainer.image} className="img-fluid" alt=""/>
                                <div className="member-content">
                                  <h5 className="font-weight-normal">{trainer.name}</h5>
                                  {/* <span>{trainer.role}</span> */}
                                  <p className="mt-2">{trainer.Price}</p>
                                    <button
                                      type="button"
                                      className="btn btn-light border border-1 position-absolute mb-2 bottom-0 end-0 me-2"
                                      onClick={() => {
                                        // Add the current trainer to the cart
                                        addToCart(trainer);
                                        // Navigate to the cart page
                                        
                                        navigate('/cart');
                                      }}
                                    >
                                      <FontAwesomeIcon icon={faCartShopping} />
                                    </button>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    
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
  )
}

export default Product
