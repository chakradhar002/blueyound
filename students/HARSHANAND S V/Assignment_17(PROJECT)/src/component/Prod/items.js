import { useContext } from 'react';
import { Auth_checking } from '../../App';

const Item = (props) => {
  let { user, setuser, cart } = useContext(Auth_checking);
  const addToCart = () => {
    for(let i=0;i<cart.current.length;i++){
      if(cart.current[i].name==props.data.name){
        cart.current[i].count++;
        console.log(cart.current);
        return;
      }
    }
    cart.current = [...cart.current,{...props.data,count:1}];
    console.log(cart.current);
  };

  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="course-item">
        <img src={props.data.url} className="img-fluid" alt="..." />
        <div className="course-content">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button type="button" onClick={addToCart}>Cart</button>
            <p className="price">Rs.{props.data.cost}</p>
          </div>
          <h3><a href="course-details.html">{props.data.name}</a></h3>
          <p>{props.data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
