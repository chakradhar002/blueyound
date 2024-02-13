import Login from './components/login.jsx';
import './App.css';
import Dashboard from './components/dashboard.jsx';
import Product from './components/products.jsx';
import About from './components/about.jsx';
import Cart from './components/cart.jsx';
import Contact from './components/contact.jsx';
import { createContext,useRef } from 'react';
import { trainersData } from './components/products.jsx';
import { BrowserRouter, Routes,Route } from 'react-router-dom';



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
            <Route path="/about" element={<About/>}/>
            <Route path = "/contact" element ={<Contact/>}/>
            <Route path = "/cart" element ={<Cart/>}/>
            <Route path = "/products" element ={<Product data={trainersData}/>}/>
            <Route  index element ={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
 
    </UserContext.Provider>
  );
}

export default App;
