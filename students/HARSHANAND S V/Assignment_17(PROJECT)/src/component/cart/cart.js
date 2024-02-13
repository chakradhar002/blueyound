import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import { Outlet, Link } from "react-router-dom";
import { useContext } from 'react';
import { Auth_checking } from '../../App';
import ItemCheckOut from "./item_check_out"; 
import { useState } from "react";
const Cart = () => {
  const [quant, setquant]=useState(0);
  let { user, setuser, cart } = useContext(Auth_checking);
  console.log(cart.current);
  let total_cost=0;
  for(let i=0;i<cart.current.length;i++){
    total_cost+=(cart.current[i].count)*(cart.current[i].cost*1);
    console.log(total_cost);
  }
  return (
    <>
      <Header />
      <section className="h-100 h-custom" style={{ backgroundColor: '#eee', marginTop: "50px" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3"><Link to="/" className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</Link></h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have {cart.current.length} items in your cart</p>
                        </div>
                      </div>
                      {cart.current.map((el, index) => <ItemCheckOut data={{...el,index,setquant}} />)}
                    </div>
                    <div className="col-lg-5">
                      <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">Rs.{total_cost}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">Rs.{cart.current.length==0?0:500.00}</p>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">Rs.{total_cost+(cart.current.length==0?0:500.00) }</p>
                        </div>
                        <button type="button" className="btn btn-info btn-block btn-lg">
                          <div className="d-flex justify-content-between">
                            <span>Rs.{total_cost+(cart.current.length==0?0:500.00)}</span>
                            <span>{" "+"Checkout"} <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                          </div>
                        </button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Outlet />
    </>
  );
};

export default Cart;
