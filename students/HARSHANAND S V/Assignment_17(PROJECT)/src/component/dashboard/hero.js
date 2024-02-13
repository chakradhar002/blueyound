import { Outlet, Link } from "react-router-dom";
import { useContext } from 'react';
import { Auth_checking } from "../../App";
const Hero=()=>{
    let { user, setuser } = useContext(Auth_checking);
    return (
        <div>
            <section id="hero" className="d-flex justify-content-center align-items-center vh-100">
                <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Creating <br />not just furniture</h1>
                    <h2> but experiences that effortlessly fit into the tapestry of everyday life.</h2>
                    {!user?<Link to="/login"><a className="btn-get-started">Get Started</a></Link>:<></>}
                </div>
            </section>
            <Outlet></Outlet>
        </div>
    );
};
export default Hero;