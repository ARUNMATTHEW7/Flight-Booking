import React from 'react';
import './TopHeaderStyle.css'
import logo from './plane.png'
import link, { Link } from 'react-router-dom';
import LogninForm from './LogninForm';
import Homes from './Home';

function HeaderTop(){
    return(
        <>
        <div className="main-div">
            <a className="logo-class"> <img  className="logo" src={logo}></img> <p id="logo_text"> <strong>Amt-Fly...</strong> </p></a>
            <nav>   
                <ul>
                <li><Link to="/">Home</Link></li> 
                <li><a href="#">Flights</a></li>  
                <li><a href="#">Offers</a></li> 
                <li><a href="#">FAQ's</a></li> 
                <li><Link to="/Login">Login</Link></li> 
                </ul>
            </nav>
        </div>
      
        </>
    );
}
export default HeaderTop