import { Link } from "react-router-dom";
import Header from "../header";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PureCounter from '@srexi/purecounterjs';

function NewArrivals(){
    useEffect(() => {
        AOS.init();
        new PureCounter();
    }, []);   
    return(
        <>
            <Header />
            {/* <!-- ======= Breadcrumbs ======= --> */}
            <div className="breadcrumbs">
            <div className="container">
                <h2>New Arrivals</h2>
                <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
            </div>
            </div>
            {/* <!-- End Breadcrumbs --> */}

            {/* <!-- ======= Courses Section ======= --> */}
            <section id="courses" className="courses">
            <div className="container" data-aos="fade-up">

                <div className="row" data-aos="zoom-in" data-aos-delay="100">

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div className="course-item">
                    <img src="assets/img/popular-1.jpg" className="img-fluid" alt="..."/>
                    <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                        {/* <h4>Web Development</h4> */}
                        <Link className="get-started-btn">Buy</Link>
                        <p className="price">$169</p>
                        </div>

                        <h3><Link to="" >Website Design</Link></h3>
                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                        
                        <div className="trainer-rank d-flex align-items-center">
                            <i className="bx bx-user"></i>&nbsp;50
                            &nbsp;&nbsp;
                            <i className="bx bx-heart"></i>&nbsp;65
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <!-- End Course Item--> */}

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div className="course-item">
                    <img src="assets/img/popular-2.jpg" className="img-fluid" alt="..." />
                    <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                        <Link className="get-started-btn">Buy</Link>
                        <p className="price">$250</p>
                        </div>

                        <h3><Link to="">Search Engine Optimization</Link></h3>
                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                        
                        <div className="trainer-rank d-flex align-items-center">
                            <i className="bx bx-user"></i>&nbsp;35
                            &nbsp;&nbsp;
                            <i className="bx bx-heart"></i>&nbsp;42
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <!-- End Course Item--> */}

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div className="course-item">
                    <img src="assets/img/popular-3.jpg" className="img-fluid" alt="..." />
                    <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                        <Link className="get-started-btn">Buy</Link>
                        <p className="price">$180</p>
                        </div>

                        <h3><Link to="">Copywriting</Link></h3>
                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                        
                        <div className="trainer-rank d-flex align-items-center">
                            <i className="bx bx-user"></i>&nbsp;20
                            &nbsp;&nbsp;
                            <i className="bx bx-heart"></i>&nbsp;85
                        </div>
                        </div>
                    </div>
                    </div>
                </div> 
                {/* <!-- End Course Item--> */}

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div className="course-item">
                    <img src="assets/img/popular-1.jpg" className="img-fluid" alt="..."/>
                    <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                        <Link className="get-started-btn">Buy</Link>
                        <p className="price">$169</p>
                        </div>

                        <h3><Link to="">Website Design</Link></h3>
                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                        
                        <div className="trainer-rank d-flex align-items-center">
                            <i className="bx bx-user"></i>&nbsp;50
                            &nbsp;&nbsp;
                            <i className="bx bx-heart"></i>&nbsp;65
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <!-- End Course Item--> */}

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div className="course-item">
                    <img src="assets/img/popular-2.jpg" className="img-fluid" alt="..." />
                    <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                        <Link className="get-started-btn">Buy</Link>
                        <p className="price">$250</p>
                        </div>

                        <h3><Link to="">Search Engine Optimization</Link></h3>
                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                        
                        <div className="trainer-rank d-flex align-items-center">
                            <i className="bx bx-user"></i>&nbsp;35
                            &nbsp;&nbsp;
                            <i className="bx bx-heart"></i>&nbsp;42
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <!-- End Course Item--> */}

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div className="course-item">
                    <img src="assets/img/popular-3.jpg" className="img-fluid" alt="..." />
                    <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                        <Link className="get-started-btn">Buy</Link>
                        <p className="price">$180</p>
                        </div>

                        <h3><Link to="">Copywriting</Link></h3>
                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                        
                        <div className="trainer-rank d-flex align-items-center">
                            <i className="bx bx-user"></i>&nbsp;20
                            &nbsp;&nbsp;
                            <i className="bx bx-heart"></i>&nbsp;85
                        </div>
                        </div>
                    </div>
                    </div>
                </div> 
                {/* <!-- End Course Item--> */}


                </div>

            </div>
            </section>
            {/* <!-- End Courses Section --> */}

            <footer id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
        
                                <div className="col-lg-3 col-md-6 footer-contact">
                                    <h3>ButIt</h3>
                                    <p>
                                    A108 Adam Street <br/>
                                    New York, NY 535022<br/>
                                    United States <br/><br/>
                                    <strong>Phone:</strong> +1 5589 55488 55<br/>
                                    <strong>Email:</strong> info@example.com<br/>
                                    </p>
                                </div>
        
                                <div className="col-lg-2 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to = "#">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to = "#">About us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to = "#">Services</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to = "#">Terms of service</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to = "#">Privacy policy</Link></li>
                                    </ul>
                                </div>
        
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Best Sellers</h4>
                                    <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to = "#">One Piece</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to = "#">Jujutsu Kaisen</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to = "#">Naruto</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to = "#">Solo Leveling</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to = "#">Demon Slayer</Link></li>
                                    </ul>
                                </div>
        
                                <div className="col-lg-4 col-md-6 footer-newsletter">
                                    <h4>Join Our Newsletter</h4>
                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                    <form action="" method="post">
                                    <input type="email" name="email"/><input type="submit" value="Subscribe" />
                                    </form>
                                </div>
        
                            </div>
                        </div>
                    </div>
        
                    <div className="container d-md-flex py-4">
        
                        <div className="me-md-auto text-center text-md-start">
                            <div className="copyright">
                            &copy; Copyright <strong><span>Mentor</span></strong>. All Rights Reserved
                            </div>
                            <div className="credits">
                            Designed by <Link to = "https://bootstrapmade.com/">BootstrapMade</Link>
                            </div>
                        </div>
                        <div className="social-links text-center text-md-right pt-3 pt-md-0">
                            <Link to = "#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                            <Link to = "#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                            <Link to = "#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                            <Link to = "#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                            <Link to = "#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                        </div>
                    </div>
            </footer>
        </>
    );
}

export default NewArrivals;