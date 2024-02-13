// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import  { useContext } from "react";
// import { Link, Outlet } from 'react-router-dom';
// import { UserContext } from '../App';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// const {cart}=useContext(UserContext);
//   console.log(cart.current);

//   const cartItems=cart.current;


// const renderCartItems=() => {


//   <section className="vh-100" style={{ backgroundColor: '#fdccbc' }}>
//   <div className="container h-100">
//     <div className="row d-flex justify-content-center align-items-center h-100">
//       <div className="col">
//         <p>
//           <span className="h2">Shopping Cart </span>
//           <span className="h4">(1 item in your cart)</span>
//         </p>

        
//         {cartItems.map((curr_item) => (
//                       <div className="card mb-3" key={curr_item.item.id}>
//                         <div className="card-body">
//                           <div className="d-flex justify-content-between">
//                             <div className="d-flex flex-row align-items-center">
//                               <div>
//                                 <img src={curr_item.item.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
//                               </div>
//                               <div className="ms-3">
//                                 <h5>{curr_item.item.name}</h5>
//                                 <p className="small mb-0">{curr_item.item.name}</p>
//                               </div>
//                             </div>
//                             <div className="d-flex flex-row align-items-center">
//                               <div style={{ width: '50px' }}>
//                                 <h5 className="fw-normal mb-0">{curr_item.count}</h5>
//                               </div>
//                               <div style={{ width: '80px' }}>
//                                 <h5 className="mb-0">$ {parseInt(curr_item.item.Price) * parseInt(curr_item.count)}</h5>
//                               </div>
//                               <div  style={{ color: '#cecece' }}>
                                
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}


//         <div className="card mb-5">
//           <div className="card-body p-4">
//             <div className="float-end">
//               <p className="mb-0 me-5 d-flex align-items-center">
//                 <span className="small text-muted me-2">Order total:</span>
//                 <span className="lead fw-normal">$799</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="d-flex justify-content-end">
//           <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
//           <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>




// };


// const Cart=(props) =>
// {
  

   
  



//     return (
//       <div>
//         {/* Header */}
        
//         <header id="header" className="fixed-top">
//             <div className="container d-flex align-items-center">
//               <h1 className="logo me-auto">
//                 <a href="index.html">Enstone</a>
//               </h1>
//               <nav id="navbar" className="navbar order-last order-lg-0">
//                 <ul>
//                   <li><Link  to="/">Home</Link></li>
//                   <li><Link  to="/about">About</Link></li>
//                   <li><Link to="/products">Products</Link></li>
                  
//                   <li><Link  className="active" to="/cart">Cart</Link></li>
//                   <li><Link  to="/contact">Contact</Link></li>
//                   <li><Link to="/signup">Log in</Link></li>
                  
//                 </ul>
//                 <i className="bi bi-list mobile-nav-toggle"></i>
//               </nav>
//               <Link to="/products" className="get-started-btn">Purchase</Link>
//             </div>
//           </header>
//         {/* End Header */}
//         <br></br>
//         <br></br>
//         <br></br>
  
  
//         <main>


//          <div className="cart-container">

//                   {cartItems.length==0 ? 
//                   (   <p>Your cart is empty</p>) : ( <>{ renderCartItems()}</>)
//                       }
//           </div>

        
//         </main>
        
        
        
        
  
        //  <footer id="footer">
        //     <div className="footer-top">
        //       <div className="container">
        //         <div className="row">
        //           <div className="col-lg-3 col-md-6 footer-contact">
        //             <h3>Enstone</h3>
        //             <p>A108 Adam Street <br /> New York, NY 535022<br /> United states <br /><br /><strong>Phone:</strong> +1 5589 55488 55<br /><strong>Email:</strong> info@example.com<br /></p>
        //           </div>
        //           <div className="col-lg-2 col-md-6 footer-links">
        //             <h4>Useful Links</h4>
        //             <ul>
        //               <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
        //               <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
        //               <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
        //               <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of services</a></li>
        //               <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
        //             </ul>
        //           </div>
        //           <div className="col-lg-3 col-md-6 footer-links">
        //             <h4>Our Services</h4>
        //             <ul>
        //               <li><i className="bx bx-chevron-right"></i> <a href="#">Italian Marble</a></li>
        //               <li><i className="bx bx-chevron-right"></i> <a href="#">Satuario Marble</a></li>
        //               <li><i className="bx bx-chevron-right"></i> <a href="#">Flawless White Marble</a></li>
        //               <li><i className="bx bx-chevron-right"></i> <a href="#">Onyx Marble</a></li>
        //               <li><i className="bx bx-chevron-right"></i> <a href="#">Traventine Marble</a></li>
        //             </ul>
        //           </div>
        //           <div className="col-lg-4 col-md-6 footer-newsletter">
        //             <h4>Join Our Enstone</h4>
        //             <p>Join us in our journey towards excellence, where every challenge is an opportunity to grow.</p>
        //             <form action="" method="post">
        //               <input type="email" name="email" /><input type="submit" value="Subscribe" />
        //             </form>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="container d-md-flex py-4">
        //       <div className="me-md-auto text-center text-md-start">
        //         <div className="credits">
        //           Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        //         </div>
        //       </div>
        //       <div className="social-links text-center text-md-right pt-3 pt-md-0">
        //         <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        //         <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        //         <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        //         <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
        //         <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        //       </div>
        //     </div>
        //   </footer>
  
  
  
//         <Outlet/>
        
//       </div>
//     )
    
// };

   

  



// const Cart = (props) => {
 
 
 
//   const RemoveFromCart = (curr_item) => {
//     for (let i = 0; i < cart.current.length; i++) {
//       if (cart.current[i].item.id === curr_item.item.id) {
//         if (curr_item.count > 1) {
//           curr_item.count--;
//         } else {
//           cart.current.splice(i, 1);
//         }
//       }
//     }
//   };
 
 
//   const {cart} = useContext(UserContext);
 
//   console.log(cart.current);
//   const cartItems = cart.current;
//   // Function to display the cart items
//   const renderCartItems = () => {
//     return(
//       <section className="h-100 h-custom" style={{ backgroundColor: '#EE82EE' }}>
//         <div className="container py-5 h-100" >
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col">
//               <div className="card">
//                 <div className="card-body p-4">
//                   <div className="row">
//                     <div className="col-lg-8 m-auto" style={{ color :'#0000CD'}}>
//                       <h5 className="mb-3" >
//                         <Link to='/products' className="text-body" >
//                           <i className="fas fa-long-arrow-alt-left me-2" ></i>Continue shopping
//                         </Link>
//                       </h5>
//                       <hr />
 
//                       <div className="d-flex justify-content-between align-items-center mb-4">
//                         <div>
//                           <p className="mb-1">Shopping cart</p>
//                           <p className="mb-0">You have {cartItems.length} items in your cart</p>
//                         </div>
//                         <div>
//                           <p className="mb-0">
//                             <span className="text-muted">Sort by:</span>{' '}
//                             <a href="#!" className="text-body">
//                               price <i className="fas fa-angle-down mt-1"></i>
//                             </a>
//                           </p>
//                         </div>
//                       </div>
 
//                       {cartItems.map((curr_item) => (
//                         <div className="card mb-3" key={curr_item.item.id}>
//                           <div className="card-body">
//                             <div className="d-flex justify-content-between">
//                               <div className="d-flex flex-row align-items-center">
//                                 <div>
//                                   <img src={curr_item.item.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
//                                 </div>
//                                 <div className="ms-3">
//                                   <h5>{curr_item.item.name}</h5>
//                                   <p className="small mb-0">{curr_item.item.name}</p>
//                                 </div>
//                               </div>
//                               <div className="d-flex flex-row align-items-center">
//                                 <div style={{ width: '50px' }}>
//                                   <h5 className="fw-normal mb-0">{curr_item.count}</h5>
//                                 </div>
//                                 <div style={{ width: '80px' }}>
//                                   <h5 className="mb-0">$ {parseInt(curr_item.item.price) * parseInt(curr_item.count)}</h5>
//                                 </div>
//                                 <div  style={{ color: '#FF0000' }}>
//                                   <FontAwesomeIcon
//                                     className='cursor-pointer'
//                                    size={"48px"} icon={faTrash}
//                                    onClick={() => {
//                                     RemoveFromCart(curr_item);
//                                    }} />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}

                           


//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   };
//   return (

//     <div>
//     <header id="header" className="fixed-top">
//                  <div className="container d-flex align-items-center">
//                  <h1 className="logo me-auto">
//                     <a href="index.html">Enstone</a>
//                    </h1>
//                    <nav id="navbar" className="navbar order-last order-lg-0">
//                      <ul>
//                        <li><Link  to="/">Home</Link></li>
//                        <li><Link  to="/about">About</Link></li>
//                        <li><Link to="/products">Products</Link></li>
                      
//                      <li><Link  className="active" to="/cart">Cart</Link></li>
//                       <li><Link  to="/contact">Contact</Link></li>
//                      <li><Link to="/signup">Log in</Link></li>
                      
//                    </ul>
//                      <i className="bi bi-list mobile-nav-toggle"></i>
//                  </nav>
//                   <Link to="/products" className="get-started-btn">Purchase</Link>
//                </div>
//               </header>
//            {/* End Header */}




//       <div className="cart-container">
//       {/* <h2>Your Cart</h2> */}
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           {renderCartItems()}
         
//         </>
//       )}
//        </div>


//        <footer id="footer">
//             <div className="footer-top">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-lg-3 col-md-6 footer-contact">
//                     <h3>Enstone</h3>
//                     <p>A108 Adam Street <br /> New York, NY 535022<br /> United states <br /><br /><strong>Phone:</strong> +1 5589 55488 55<br /><strong>Email:</strong> info@example.com<br /></p>
//                   </div>
//                   <div className="col-lg-2 col-md-6 footer-links">
//                     <h4>Useful Links</h4>
//                     <ul>
//                       <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
//                       <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
//                       <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
//                       <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of services</a></li>
//                       <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
//                     </ul>
//                   </div>
//                   <div className="col-lg-3 col-md-6 footer-links">
//                     <h4>Our Services</h4>
//                     <ul>
//                       <li><i className="bx bx-chevron-right"></i> <a href="#">Italian Marble</a></li>
//                       <li><i className="bx bx-chevron-right"></i> <a href="#">Satuario Marble</a></li>
//                       <li><i className="bx bx-chevron-right"></i> <a href="#">Flawless White Marble</a></li>
//                       <li><i className="bx bx-chevron-right"></i> <a href="#">Onyx Marble</a></li>
//                       <li><i className="bx bx-chevron-right"></i> <a href="#">Traventine Marble</a></li>
//                     </ul>
//                   </div>
//                   <div className="col-lg-4 col-md-6 footer-newsletter">
//                     <h4>Join Our Enstone</h4>
//                     <p>Join us in our journey towards excellence, where every challenge is an opportunity to grow.</p>
//                     <form action="" method="post">
//                       <input type="email" name="email" /><input type="submit" value="Subscribe" />
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="container d-md-flex py-4">
//               <div className="me-md-auto text-center text-md-start">
//                 <div className="credits">
//                   Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
//                 </div>
//               </div>
//               <div className="social-links text-center text-md-right pt-3 pt-md-0">
//                 <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
//                 <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
//                 <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
//                 <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
//                 <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
//               </div>
//             </div>
//           </footer>
  



//     </div>
//   );
// };
 
// export default Cart;
 


// // export default Cart;



import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cart} = useContext(UserContext);
  const cartItems = cart.current;

  const removeFromCart = (curr_item) => {
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

  const getTotalPrice = () => {
    return cartItems.reduce((total, curr_item) => total + (parseInt(curr_item.item.price) * parseInt(curr_item.count)), 0);
  };

  const renderCartItems = () => {
    return (
      <section className="h-100 h-custom" style={{ backgroundColor: '#EE82EE' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-8 m-auto" >
                      <h3 className="mb-3" style={{fontWeight :'bold'}}>
                        Shopping Cart
                      </h3>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4" style={{ color: '#0000CD' }}>
                        <div>
                          
                          <p className="mb-0">You have {cartItems.length} items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">Sort by:</span>{' '}
                            <a href="#!" className="text-body">
                              price <i className="fas fa-angle-down mt-1"></i>
                            </a>
                          </p>
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
                                <div style={{ width: '80px' }}>
                                  <h5 className="mb-0">$ {parseInt(curr_item.item.price) * parseInt(curr_item.count)}</h5>
                                </div>
                                <div style={{ color: '#FF0000' }}>
                                  <FontAwesomeIcon
                                    className='cursor-pointer'
                                    size={"48px"} icon={faTrash}
                                    onClick={() => {
                                      removeFromCart(curr_item);
                                    }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">Enstone</a>
          </h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link className="active" to="/cart">Cart</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/signup">Log in</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <Link to="/products" className="get-started-btn">Purchase</Link>
        </div>
      </header>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {renderCartItems()}
            <div className="card mb-5">
              <div className="card-body p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">$ {getTotalPrice()}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
             <Link  to="/products"> <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button></Link>
              <button type="button" className="btn btn-primary btn-lg">Purchase</button>
            </div>
          </>
        )}
      </div>
      <footer id="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Cart;

