import { Link } from "react-router-dom";
function Header(){
    return(
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div id="headerImageLink">
                        <Link to="/" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></Link>
                        <h1 className="logo me-auto"><Link to="/">BuyIt</Link></h1>  
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                    <li><Link className="active" to="/">Home</Link></li>
                    <li><Link to="/aboutus">About</Link></li>
                    <li><Link to="/newArrivals">New Arrivals</Link></li>
                    <li><Link to="/boxSets">Box Sets</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li className="dropdown"><Link to="#"><span>All Category</span> <i className="bi bi-chevron-down"></i></Link>
                        <ul>
                        <li><Link to="#">Action</Link></li>
                        <li className="dropdown"><Link to="#"><span>Light Novels</span> <i className="bi bi-chevron-right"></i></Link>
                            <ul>
                            <li><Link to="#">KonoSuba</Link></li>
                            <li><Link to="#">Mushoko Tensei</Link></li>
                            <li><Link to="#">Re:Zero</Link></li>
                            <li><Link to="#">86 : Eighty Six</Link></li>
                            <li><Link to="#">The Rising of the Shield Hero</Link></li>
                            </ul>
                        </li>
                        <li><Link to="#">Adventure</Link></li>
                        <li><Link to="#">Romance</Link></li>
                        <li><Link to="#">Isekai</Link></li>
                        </ul>
                    </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

                <Link to="/Signup" className="get-started-btn">Login</Link>
                </div>
            </header>
            
        </>
    );
};

export default Header;

