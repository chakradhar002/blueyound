import React, { useState, useRef, useContext, useEffect } from 'react';
import Header from '../../header';
import Footer from '../../footer';
import { Auth_checking } from '../../App';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const { setuser } = useContext(Auth_checking);
  const Username = useRef('');
  const Password = useRef('');
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  const Handler = (e) => {
    e.preventDefault();
    let typ_username = Username.current.value;
    let typ_password = Password.current.value;
    let user_data = userData.find((el) => typ_username === el.username && typ_password === el.password);
    if (!user_data) return;
    setuser(user_data);
    console.log(user_data);
    navigate(`/`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/users");
        setUserData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className="h-100 mt-3 gradient-form" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-5">
              <div className="card rounded-3 text-black">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <img src="./assets/img/IKEA.png" style={{ width: '185px' }} alt="logo" />
                    <h4 className="mt-1 mb-5 pb-1">IKEA welcomes you</h4>
                  </div>

                  <form onSubmit={Handler}>
                    <p>Please login to your account</p>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example11"
                        className="form-control"
                        placeholder="Phone number or email address"
                        ref={Username}
                      />
                      <label className="form-label" htmlFor="form2Example11">
                        Username
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example22"
                        className="form-control"
                        ref={Password}
                      />
                      <label className="form-label" htmlFor="form2Example22">
                        Password
                      </label>
                    </div>

                    <div className="text-center pt-1 mb-5 pb-1 justify-content-center">
                      <button
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        type="submit"
                      >
                        Log in
                      </button>
                      <br></br>
                    </div>
                    
                  </form>
                  {/* Corrected usage of Link component */}
                  <div>
                    <p style={{ textAlign: "center" }}>Don't have an account? <Link to="/signup">Click here</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Login;
