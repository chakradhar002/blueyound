import React, { useState } from "react";
import { useContext } from 'react';
import { Auth_checking } from '../../App';
import { useNavigate } from 'react-router-dom';
const ItemCheckOut = (props) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(props.data.count);
  
  let { user, setuser, cart } = useContext(Auth_checking);
  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, parseInt(event.target.value) || 0);
    cart.current[props.data.index].count=newQuantity;
    props.data.setquant(newQuantity);
    setQuantity(newQuantity);
  };
  const remove=()=>{
    cart.current=[...cart.current.slice(0, props.data.index),
      ...cart.current.slice( props.data.index + 1)];
    console.log(cart.current);
    navigate('/');

  };
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img
                src={props.data.url}
                className="img-fluid rounded-3"
                alt="Shopping item"
                style={{ width: "65px" }}
              />
            </div>
            <div className="ms-3">
              <h5>{props.data.name}</h5>
              <p className="small mb-0">{props.data.description}</p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div style={{ width: "100px" }}>
              <input
                id="quantity"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="form-control quantity-input"
              />
            </div>
            <div style={{ width: "120px" }}>
              <h5 className="mb-0">{"   Rs." + props.data.cost* cart.current[props.data.index].count}</h5>
            </div>
            <img src="https://th.bing.com/th/id/OIP.MeHH1uPILocqcbznizYrggHaHa?rs=1&pid=ImgDetMain" style={{width:"30px"}} onClick={remove} ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCheckOut;


