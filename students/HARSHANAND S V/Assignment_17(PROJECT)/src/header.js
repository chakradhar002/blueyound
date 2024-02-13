import { Outlet, Link } from "react-router-dom";
import { useContext } from 'react';
import { Auth_checking } from "./App";
const Header=()=>{
    let { user, setuser,cart } = useContext(Auth_checking);
  
    return (
        <>    
             <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a href="/"><img src="./assets/img/IKEA.png" alt="" /></a></h1>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                    <li><Link to="/"><a className="active" >Home</a></Link></li>
                    <li><Link to="aboutus" >About</Link></li>
                    <li className="dropdown">
                        <a href="#"><span>Products</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                        <li className="dropdown">
                            <a href="#"><span>Furniture</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                            <li><Link to="/product/furniture/0">Gaming furniture</Link></li>
                            <li><Link to="/product/furniture/1">Sofas</Link></li>
                            <li><Link to="/product/furniture/2">Bookcases & shelving units</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#"><span>Decoration</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                            <li><Link to="/product/decorations/0">Frames & pictures</Link></li>
                            <li><Link to="/product/decorations/1">Plants & flowers</Link></li>
                            <li><Link to="/product/decorations/2">Storage boxes & baskets</Link></li>
                            </ul>
                        </li>
                        </ul>
                    </li>

                    <li><Link to="/contact"><a >Contact</a></Link></li>
                    <li><Link to="/cart"><a >cart</a></Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {!user?<Link to="/Login"><a  className="get-started-btn">Get Started</a></Link>:<a  className="get-started-btn" onClick={()=>{setuser('');cart.current=[];}}>Log out</a>}
                
                </div>
            </header>
            <Outlet/>
        </>
    );
};
export default Header;