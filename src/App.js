import {React }  from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Career from './components/Career';
import World1 from './components/World1';
import World2 from './components/World2';
import Product from './components/Product';
import Header from './components/Header';
import Billing from './components/Billing';
import PrintPage from './components/PrintPage';
import Making from './components/Making';
import Login from './components/Login';


// home page
// content of press release




const App=()=>{
return(
  <BrowserRouter>
  <Header></Header>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/products" element={<Product />}></Route>
    <Route path="/world1" element={<World1 />}></Route>
    <Route path="/world2" element={<World2 />}></Route>
    <Route path="/carrer" element={<Career />}></Route>
    <Route path="/billing" element={<Billing/>}></Route>
    <Route path="/bill/print" element={<PrintPage/>}></Route>
    <Route path="/blog" element={<Making/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    
    </Routes>
  </BrowserRouter>
);

}

export default App;
