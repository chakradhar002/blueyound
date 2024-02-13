import { Link } from "react-router-dom";
import Header from "../header";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PureCounter from '@srexi/purecounterjs';


function Cart(){
    useEffect(() => {
        AOS.init();
        new PureCounter();
    }, []);
    return (
        
    <>
    <Header />
    <section className="page">
	 	<section className="shopping-cart dark">
	 		<div className="container">
		        <div className="block-heading">
		          <h2>Shopping Cart</h2>
		          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
		        </div>
		        <div className="content">
	 				<div className="row">
	 					<div className="col-md-12 col-lg-8">
	 						<div className="items">
				 				<div className="product">
				 					<div className="row">
					 					<div className="col-md-3">
					 						<img className="img-fluid mx-auto d-block image" src="assets/img/popular-1.jpg" />
					 					</div>
					 					<div className="col-md-8">
					 						<div className="info">
						 						<div className="row">
							 						<div className="col-md-5 product-name">
							 							<div className="product-name">
								 							<Link to="#">One Piece</Link>
								 							<div className="product-info">
									 							<div>Volume: <span className="value">5</span></div>
									 						</div>
									 					</div>
							 						</div>
							 						<div className="col-md-4 quantity">
							 							<label for="quantity">Quantity:</label>
							 							<input id="quantity" type="number" value ="1" className="form-control quantity-input" />
							 						</div>
							 						<div className="col-md-3 price">
							 							<span>$120</span>
							 						</div>
							 					</div>
							 				</div>
					 					</div>
					 				</div>
				 				</div>
				 				<div className="product">
				 					<div className="row">
					 					<div className="col-md-3">
					 						<img className="img-fluid mx-auto d-block image" src="assets/img/boxSet-1.jpg"/>
					 					</div>
					 					<div className="col-md-8">
					 						<div className="info">
						 						<div className="row">
							 						<div className="col-md-5 product-name">
							 							<div className="product-name">
								 							<Link to="#">One Piece</Link>
								 							<div className="product-info">
									 							<div>Volume: <span className="value">1</span></div>
									 						</div>
									 					</div>
							 						</div>
							 						<div className="col-md-4 quantity">
							 							<label for="quantity">Quantity:</label>
							 							<input id="quantity" type="number" value ="1" className="form-control quantity-input" />
							 						</div>
							 						<div className="col-md-3 price">
							 							<span>$120</span>
							 						</div>
							 					</div>
							 				</div>
					 					</div>
					 				</div>
				 				</div>
				 				<div className="product">
				 					<div className="row">
					 					<div className="col-md-3">
					 						<img className="img-fluid mx-auto d-block image" src="assets/img/popular-1.jpg" />
					 					</div>
					 					<div className="col-md-8">
					 						<div className="info">
						 						<div className="row">
							 						<div className="col-md-5 product-name">
							 							<div className="product-name">
								 							<Link to="#">Bleach</Link>
								 							<div className="product-info">
									 							<div>Volume: <span className="value">3</span></div>
									 						</div>
									 					</div>
							 						</div>
							 						<div className="col-md-4 quantity">
							 							<label for="quantity">Quantity:</label>
							 							<input id="quantity" type="number" value ="1" className="form-control quantity-input" />
							 						</div>
							 						<div className="col-md-3 price">
							 							<span>$120</span>
							 						</div>
							 					</div>
							 				</div>
					 					</div>
					 				</div>
				 				</div>
				 			</div>
			 			</div>
			 			<div className="col-md-12 col-lg-4">
			 				<div className="summary">
			 					<h3>Summary</h3>
			 					<div className="summary-item"><span className="text">Subtotal</span><span className="price">$360</span></div>
			 					<div className="summary-item"><span className="text">Discount</span><span className="price">$0</span></div>
			 					<div className="summary-item"><span className="text">Shipping</span><span className="price">$0</span></div>
			 					<div className="summary-item"><span className="text">Total</span><span className="price">$360</span></div>
			 					<button type="button" className="btn btn-primary btn-lg btn-block">Checkout</button>
				 			</div>
			 			</div>
		 			</div> 
		 		</div>
	 		</div>
		</section>
	</section>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    </>
    );
};

export default Cart;