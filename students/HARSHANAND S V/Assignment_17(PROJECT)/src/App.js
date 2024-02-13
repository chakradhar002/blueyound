import React, { useEffect, useState } from "react";
import DashBoard  from "./component/dashboard/dashboard";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./component/Login/login";
import Product from "./component/Prod/product";
import Furniture from "./data/furniture_data";
import Decorations from "./data/decorations";
import Cart from "./component/cart/cart";
import { useRef } from "react";
import Aboutus from "./component/aboutus/aboutus";
import Sign_up from "./component/Login/sign_up";
// import Sign_up from "./component/Login/sign_up";
// import AuthContext from './context/authContext'

export const Auth_checking=React.createContext();

function App() {
    // const [cart, setcart]=useState();
    const [user,setuser]=useState();
    let cart =useRef([]);
    let value={user,setuser,cart};
 
  return (
    <BrowserRouter>
      <Auth_checking.Provider value={value}>
        <Routes>
            <Route path="/" element={<DashBoard/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Sign_up/>}/>
            <Route path="product">
                <Route path="furniture">
                    <Route path=":id" element={user?<Product data={Furniture}/>:<Login/>}/>
                </Route>
                <Route path="decorations">
                    <Route path=":id" element={user?<Product data={Decorations}></Product>:<Login/>}/>
                </Route>
            </Route>
            <Route path="aboutus" element={<Aboutus/>}/>
            <Route path="cart" element={user?<Cart/>:<Login/>}/>
        </Routes>
      </Auth_checking.Provider>     
    </BrowserRouter>
  );
}

export default App;
