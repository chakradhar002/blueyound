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
            
            <Outlet />
        
    </>
  )
}

export default Product
