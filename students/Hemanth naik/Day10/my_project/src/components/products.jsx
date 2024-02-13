import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
// import { ShopContext } from './shopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './dashboard.css';
import italian1 from '../assets/img/products/italian1.jpg';
import italian2 from '../assets/img/products/italian2.jpg';
import italian3 from '../assets/img/products/italian3.jpg';
import onyx1 from '../assets/img/products/onyx1.jpg';
import onyx2 from '../assets/img/products/onyx2.jpg';
import onyx3 from '../assets/img/products/onyx3.jpg';
import sat1 from '../assets/img/products/sat1.jpg';
import sat2 from '../assets/img/products/sat2.jpg';
import traventine1 from '../assets/img/products/traventine1.jpg';
import traventine2 from '../assets/img/products/traventine2.jpg';
import flaw1 from '../assets/img/products/flaw1.jpg';
import flaw2 from '../assets/img/products/flaw2.jpg';
import white1 from '../assets/img/products/white1.jpg';
import white2 from '../assets/img/products/white2.jpg';
import white3 from '../assets/img/products/white3.jpg';
import white4 from '../assets/img/products/white4.jpg';
import green1 from '../assets/img/products/green1.jpg';
import green2 from '../assets/img/products/green2.jpg';
import green3 from '../assets/img/products/green3.jpg';
import red1 from '../assets/img/products/red1.jpg';
import red2 from '../assets/img/products/red2.jpg';
import red3 from '../assets/img/products/red3.jpg';
import pink1 from '../assets/img/products/pink1.jpg';
import pink2 from '../assets/img/products/pink2.jpg';
import grey1 from '../assets/img/products/grey1.jpg';
import grey2 from '../assets/img/products/grey2.jpg';
import brown1 from '../assets/img/products/brown1.jpg';
import brown2 from '../assets/img/products/brown2.jpg';
import beige1 from '../assets/img/products/beige1.jpg';
import blue1 from '../assets/img/products/blue1.jpg';
import blue2 from '../assets/img/products/blue2.jpg';
import blue3 from '../assets/img/products/blue3.jpg';
import black1 from '../assets/img/products/black1.jpg';
import black2 from '../assets/img/products/black2.jpg';
import black3 from '../assets/img/products/black3.jpg';
import black4 from '../assets/img/products/black4.jpg';

import  { UserContext } from "../App";
import  { useContext } from "react";







const trainersData = [
  { id: 1, name: 'Dark Italian', price: '18', image: italian1 },
  { id: 2, name: 'Crema Italian ', price: '16', image: italian3 },
  { id: 3, name: 'Toro Italian', price: '20',  image: italian2 },
  { id: 4, name: 'Onyx Green', price: '15',  image: onyx1  },

  { id: 5, name: 'Golden-Brown Onyx', price: '25', image: onyx2  },
  { id: 6, name: 'Mango Onyx', price: '22', image: onyx3  },
  { id: 7, name: 'Paonazetto White', price: '20', image: flaw1  },
  { id: 8, name: 'Caravaggio White', price: '18', image: flaw2  },

  {id: 9, name: 'Bronze Satuario', price: '18', image: sat1 },
  { id: 10, name: 'Satuario Venatino', price: '25',  image: sat2  },
  { id: 11, name: 'Big Tiger Traventine', price: '24',  image: traventine1  },
  { id: 12, name: 'Wallnut Traventine', price: '19',  image: traventine2  },


  { id: 13, name: 'Verde Taturaga', price: '9', image: green1  },
  { id: 14, name: 'Verdura Green', price: '8',  image: green2  },
  { id: 15, name: 'Fusion Chiaro', price: '11',  image: green3  },
  { id: 16, name: 'Rosso Dorato', price: '10',  image: red3  },


  { id: 17, name: 'Viola Fiora Marble', price: '15', image: white4  },
  { id: 18, name: 'Golden Spider Marble', price: '12', image: white3  },
  { id: 19, name: 'Alaskan White', price: '10', image: white1  },
  { id: 20, name: 'Laza GL White', price: '8', image: white2  },

  { id: 21, name: 'Cloudy Pink', price: '26', image: pink1  },
  { id: 22, name: 'Tiger Pink', price: '28',  image: pink2  },
  { id: 23, name: 'Rosa Pistholla', price: '16',  image: red1  },
  { id: 24, name: 'Red Verona', price: '15',  image: red2  },

  { id: 25, name: 'Carmel Grey', price: '8', image: grey1  },
  { id: 26, name: 'Capo DE GRE', price: '10',  image: grey2  },
  { id: 27, name: 'Burno Sequio Pelle', price: '11',  image: brown2  },
  { id: 28, name: 'Burno Conchiglia', price: '10',  image: brown1  },

  { id: 29, name: 'Bottochino Biege', price: '9', image: beige1  },
  { id: 30, name: 'Blue Fantasy', price: '18',  image: blue1  },
  { id: 31, name: 'Lemurian Labronate', price: '17',  image: blue2  },
  { id: 32, name: 'Ice Blue', price: '8',  image: blue3  },
 
  { id: 33, name: 'Argos Gold', price: '19', image: black1  },
  { id: 34, name: 'Nerro Corroza', price: '17',  image: black2  },
  { id: 35, name: 'Black Portoro', price: '13',  image: black3  },
  { id: 36, name: 'Levante Orient', price: '11',  image: black4  },

  
];







function Product(props) {


  
 

 const td=props.data;
 const {cart}=useContext(UserContext);
 const navigate=useNavigate();

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

// const {} = useContext(ShopContext);


    return (
      <div>
        {/* Header */}
        
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
              <h1 className="logo me-auto">
                <a href="index.html">Enstone</a>
              </h1>
              <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                  <li><Link  to="/">Home</Link></li>
                  <li><Link  to="/about">About</Link></li>
                  <li><Link className="active" to="/products">Products</Link></li>
                  
                  <li><Link to="/cart">Cart</Link></li>
                  
                  <li><Link  to="/contact">Contact</Link></li>
                  <li><Link to="/signup">Log in</Link></li>
                  
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
              <Link to="/products" className="get-started-btn">Purchase</Link>
            </div>
          </header>
        {/* End Header */}
        
        


         <br></br>
         <br></br>
         <br></br>

         {/* main section */}

         <main id="main" data-aos="fade-in">
 
 <div class="breadcrumbs">
     <div class="container">
         <h2>Individual Products</h2>
         <p>Explore our diverse range of meticulously crafted Marbles that seamlessly blends style and Royalty.</p>
     </div>
 </div>
 <section id="trainers" class="trainers">
     <div class="container" data-aos="fade-up">

         <div className="row align-content-center justify-content-center" data-aos="zoom-in" data-aos-delay="100">
             {trainersData.map(trainer => (
                 <div key={trainer.id} className="col-lg-3 col-md-6">
                 <div className="member" style={{ position: 'relative', overflow: 'hidden' }}>
                     <img src={trainer.image} className="img-fluid" alt=""/>
                     <div className="member-content">
                       <h5 className="font-weight-normal">{trainer.name}</h5>
                       
                       <p className="mt-2">${trainer.price}</p>

                       <button type="button" className="btn btn-light border border-1 position-absolute mb-2 bottom-0 end-0 me-2" 
                       onClick={() => addToCart(trainer)  }>
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




{/* footer section */}
  
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
  
  export { trainersData };
  export default Product;











