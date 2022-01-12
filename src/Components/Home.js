import React from 'react';
import {Component} from 'react';
import HeaderTop from './HeaderTop';
import LogninForm from './LogninForm';
// import FlightList from './FlightList';
import Bodycomponent from './Bodycomponent';
import Bookflight from './BookFlight';
import BookedTicket from './BookedTicket';
import './FormS.css'

function Homes() {
    return(
        <>
        <HeaderTop/> 
         <Bodycomponent/>
        <Bookflight/>
        <BookedTicket/>
        
        </>
    );
    
}

export default Homes