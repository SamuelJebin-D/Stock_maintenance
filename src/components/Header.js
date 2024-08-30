import {React} from 'react';
import { Link } from "react-router-dom";
import './Header.css';





const Header=()=>{

    return (
        <div className='outer-nav-1'>

<h1 className='nav-company'>RVS AGENCY</h1>
<div className='outer-nav'>
           <Link to="/home"><button className='nav'>Home</button></Link>
           <Link to="/products"><button className='nav'>Products</button></Link>           
           <Link to="/world2"><button className='nav'>Academy</button></Link>
           <Link to="/carrer"><button className='nav'>Careers</button></Link>
           <Link to="/blog"><button className='nav'>Making</button></Link>
           <Link to="/world1"><button className='nav'>About us</button></Link>
           {/* <Link to="/billing"><button className='nav'>Billing</button></Link> */}
           <Link to="/login"><button className='nav'>Login</button></Link>
        
        </div>
        </div>
        
    );
}



export default Header;