import './App.css';
// import for routing
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
// import Layout from './Layout';
import Aboutus from './components/About';


function App() {
  <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Dashboard/>} />
      <Route index element={<Dashboard />} />
      <Route  path = "aboutus" element ={<Aboutus/>} />
      <Route path = "Signup" element = {<Login />} />
      <Route  path ="*" element ={<Dashboard/>} />
    </Routes>
  </BrowserRouter>
}

export default App;

    