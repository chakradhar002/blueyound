
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Cart from './components/cart';
import Integrated from './components/integrated';
import Login from './components/login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import prod from './data';
import { createContext, useRef } from "react";
import integ from './data2';

export const UserContext = createContext();
function App() {

 
  const cart = useRef([]);
  let val = {cart};
  return (
    <UserContext.Provider value={val}>
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path = "/signup" element ={<Login/>}/>
              <Route path = "/integrated" element ={<Integrated data={integ} />}/>
              <Route path = "/product" element ={<Product data={prod} />}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route  index element ={<Dashboard />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>

  );
}

export default App;
