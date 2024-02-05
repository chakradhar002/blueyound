import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Demo from'./Demo';
import Header from './Header';
import Footer from './Footer';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Demo/>
      <Header brand="Ford" />
      <Footer/>
  </React.StrictMode>
);

