import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Header from './header';
// import Footer from './Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Aboutus from './components/About';
// import Layout from './Layout';
import Test from './components/Test';
import NewArrivals from './components/newArrivals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import BoxSets from './components/BoxSets';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  //   <Header />
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Dashboard/>} />
      <Route index element={<Dashboard />} />
      <Route  path = "aboutus" element ={<Aboutus/>} />
      <Route path = "Signup" element = {<Login />} />
      <Route  path ="index" element ={<Dashboard/>} />
      <Route path = "test" element={ <Test />} />
      <Route path = "newArrivals" element={ <NewArrivals />} />
      <Route path = "boxSets" element={ <BoxSets />} />
      <Route path = "cart" element={ <Cart />} />
      
      
    </Routes>
  </BrowserRouter>
);

