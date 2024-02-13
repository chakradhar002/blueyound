import { Outlet, Link } from "react-router-dom";
const Why_us=()=>{

    return (
        <div>
            <section id="why-us" className="why-us">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                        <h3>Why IKEA?</h3>
                        <p>
                            Ikea's appeal lies in its affordable yet stylish furniture, fostering a unique do-it-yourself experience through flat-packaging and a commitment to sustainability, making modern home design accessible to a global audience.
                        </p>
                        <div className="text-center">
                            <a href="https://www.ikea.com/in/en/this-is-ikea/about-us/" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                        <div className="card content" style={{ width: '18rem', marginRight: '15px', marginLeft: '15px' }}>
                        <img className="card-img-top" src="./assets/img/utensils.png" alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-title">Flat 30% off</h3>
                            <p className="card-text">Exclusive offer for IKEA Family members. Valid till 8th Feb</p>
                        </div>
                        </div>
                        <div className="card content" style={{ width: '18rem', marginRight: '15px', marginLeft: '15px' }}>
                        <img className="card-img-top" src="./assets/img/nissafors.png" alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-title">Organising is awesome</h3>
                            <p className="card-text">Organising is awesome.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    );
};
export default Why_us;