import { Outlet, Link } from "react-router-dom";
import { useContext } from 'react';
import { Auth_checking } from "../../App";
const FamousProduct=()=>{
    let { user, setuser } = useContext(Auth_checking);
    return (
        <div>
            <section id="popular-courses" className="courses">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                    <h2>Courses</h2>
                    <p>Popular products</p>
                    </div>
                    <div className="row" data-aos="zoom-in" data-aos-delay="100" style={{justifyContent:"center"}}>
                    
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
                            <div className="course-item">
                            
                          <img src="assets/img/furniture.jpg" className="img-fluid" alt="..." />
                            <div className="course-content">
                                <div className="d-flex justify-content-between align-items-center mb-3">
        
                                <Link to={user?"product/furniture/0":"login"}><h4>Furniture</h4></Link>
                                <p className="price">starting at  Rs.1000</p>
                                </div>
                                <p>Stylish, affordable, and functional home furnishings. With a vast range of products, IKEA offers innovative designs, modular solutions, and a Scandinavian aesthetic, making it a popular choice for those seeking modern and accessible furniture options.</p>
                            </div>
                            </div>
                        </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="course-item">
                      <img src="assets/img/decoration.jpg" className="img-fluid" alt="..." />
                        <div className="course-content">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                            <Link to={user?"product/decorations/0":"login"}><h4>Decorations</h4></Link>
                            <p className="price">starting at Rs.4000</p>
                            </div>
                            <p>IKEA's decorative offerings encompass a myriad of tasteful and affordable options, ranging from trendy ornaments to timeless pieces, allowing customers to effortlessly enhance their living spaces with style and personality.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    );
};
export default FamousProduct;

