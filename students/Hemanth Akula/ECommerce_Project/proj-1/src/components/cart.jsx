import React from 'react';
import { UserContext } from '../App';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './cart.css'
import { Link,Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';  // Import the icon




const Cart = () => {

  
  const RemoveFromCart = (curr_item) => {
    for (let i = 0; i < cart.current.length; i++) {
      if (cart.current[i].item.id === curr_item.item.id) {
        if (curr_item.count > 1) {
          curr_item.count--;
        } else {
          cart.current.splice(i, 1);
        }
      }
    }
  };
  
  
  const {cart} = useContext(UserContext);
  
  console.log(cart.current);
  const cartItems = cart.current;
  // Function to display the cart items
  let total = 0;
  cartItems.map((curr_item) => (
    total += parseInt(curr_item.item.Price * curr_item.count)
  ));

  const renderCartItems = () => {
    return(
      <section className="h-100 h-custom" style={{ height: '500px', overflowY: 'auto', backgroundColor: '#eee'  }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-8 m-auto">
                      <h5 className="mb-3">
                        <Link to='/product' className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
                        </Link>
                      </h5>
                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have {cartItems.length} items in your cart</p>
                        </div>
                      </div>

                      {cartItems.map((curr_item) => (
                        <div className="card mb-3" key={curr_item.item.id}>
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img src={curr_item.item.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                </div>
                                <div className="ms-3">
                                  <h5>{curr_item.item.name}</h5>
                                  <p className="small mb-0">{curr_item.item.name}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: '50px' }}>
                                  <h5 className="fw-normal mb-0">{curr_item.count}</h5>
                                </div>
                                <div style={{ width: '120px' }}>
                                  <h5 className="mb-0">$ {parseInt(curr_item.item.Price) * parseInt(curr_item.count).toLocaleString()}</h5>
                                </div>
                                <div  style={{ color: '#cecece' }}>
                                  <FontAwesomeIcon
                                    className='cursor-pointer'
                                   size={"32px"} icon={faTrash}
                                   onClick={() => {
                                    RemoveFromCart(curr_item);
                                   }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="fs-4 align-content-end justify-content-end">
                        Total: ${total}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
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
                  <Link  to='/product'>Individual</Link>
                </li>
                <li>
                  <Link className="active" to='/cart'>Cart</Link>
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
        <div className="cart-container ">
          {renderCartItems()}
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
      </>
    );
};

export default Cart;



