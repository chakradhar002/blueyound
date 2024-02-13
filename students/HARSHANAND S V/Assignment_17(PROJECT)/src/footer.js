const Footer=()=>{

    return (
        <div>
                    <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 footer-contact">
                        <h6> <strong>Join in IKEA family</strong></h6>
                        <p>
                            Enjoy member-only discounts & offers, early access to IKEA sale, delicious food offers and much more. Join for free.​
                        </p>
                        <h6><strong>IKEA Network</strong></h6>
                        <p>
                            Join the membership program for business customers with exciting benefits and features. Join us for free and enjoy member discounts, quick-fix tips, online tutorials, and a lot more.
                        </p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Delivery Service</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Click & collect</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Assembly Service</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Measuring Service</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Track Your Order</a></li>
                        </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Join Our Newsletter</h4>
                        <p>Stay in the loop with IKEA's newsletter, delivering the latest trends, and home inspiration directly to your inbox, ensuring you never miss out on the exciting updates and deals that make transforming your space even more delightful.</p>
                        <form action="" method="post">
                            <input type="email" name="email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>IKEA</span></strong>. All Rights Reserved
                    </div>
                    </div>

                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="https://twitter.com/IKEA" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.facebook.com/IKEAIndia/" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/ikea/" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/ikea" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
                </footer>
        </div>
    );
};
export default Footer;