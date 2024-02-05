import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Contactus from './Contact';
import Nopage from './Nopage';
import Layout from './Layout';
import Blogs from './blog';
import Aboutus from './abouts';
import Home from './Home';

function App() {
  return (
   <BrowserRouter>
       <Routes>
          <Route path = "/" element ={<Layout/>}>
          <Route index element={<Home />} />
          <Route  path = "contactus" element ={<Contactus/>}/>
          <Route  path = "blog" element ={<Blogs/>}/>
          <Route  path = "aboutus" element ={<Aboutus/>}/>
          <Route  path ="*" element ={<Nopage/>}/>
        </Route>
       </Routes>
      </BrowserRouter>
  );
}

export default App;
