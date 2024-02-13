import React, { useRef, useContext } from 'react';
import {useNavigate, Link } from 'react-router-dom';
import Header from '../../header';
import Footer from '../../footer';
import axios from 'axios';
import { Auth_checking } from '../../App';
const SignUp = () => {
  const navigate = useNavigate();
  const Username = useRef('');
  const Password = useRef('');
  const Re_Password = useRef('');
  const { setuser } = useContext(Auth_checking);
  const  handleSubmit = async (e) => {
    e.preventDefault();
    // sign_up(Username.current.value, Password.current.value);
    if(Password.current.value!=Re_Password.current.value){
      alert('password does not match')
      return;
    }
    const response = await axios.post("http://localhost:8000/users", {
       username:Username.current.value,
       password:Password.current.value
    });
    setuser(response.data);
    console.log(response.data);
    navigate(`/`);
  };

  return (
    <>
      <Header />
      <section className="h-100 mt-3 gradient-form" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-5">
              <div className="card rounded-3 text-black">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <img
                      src="./assets/img/IKEA.png"
                      style={{ width: "185px" }}
                      alt="logo"
                    />
                    <h4 className="mt-1 mb-5 pb-1">IKEA welcomes you</h4>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example11">
                        Username
                      </label>
                      <input
                        type="email"
                        id="form2Example11"
                        className="form-control"
                        placeholder="Phone number or email address"
                        ref={Username}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example22">
                        Password
                      </label>
                      <input
                        type="password"
                        
                        className="form-control"
                        ref={Password}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example22">
                        Re-Type the password
                      </label>
                      <input
                        type="password"
                       
                        className="form-control"
                        ref={Re_Password}
                      />
                    </div>

                    <div className="text-center pt-1 mb-5 pb-1 justify-content-center">
                      <button
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </div>
                    <p style={{ display: "inline", textAlign: "center" }}> already have an account?</p><span><Link to="/Login">Login</Link></span>
                  </form>
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

export default SignUp;
