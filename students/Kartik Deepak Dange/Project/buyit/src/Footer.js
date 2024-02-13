import { Link } from "react-router-dom";
function Footer (){
    <>
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
};

export default Footer;