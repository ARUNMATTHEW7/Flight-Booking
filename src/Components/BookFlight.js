import React, { Component } from 'react';
import './Bookflight.css';
import arrows from './arrows.png';
import HeaderTop from './HeaderTop';
import PopUp from './PopUp';
import { Form, Input, InputNumber, Button } from 'antd';
const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

function BookFlight(props){
   
   
 console.log(props.location.comProps);
    // console.log(props.location.comProps.data.from);
    // console.log(props.location.comProps.data.to);
    // console.log(props.location.comProps.data.price);
    // console.log(props.location.comProps.user.age);
    // let fltId=props.location.bookProps.data.id;

    // let fltName=props.location.bookProps.data.name;
    // let fltFrom=props.location.bookProps.data.from;
    // let fltTo=props.location.bookProps.data.to;
    // let fltTime=props.location.bookProps.data.time;
    // let fltPrice=props.location.bookProps.data.price;
  
    // let fp= parseInt(fltPrice, 10);
    // let gst=fp*0.18;
    // let sTax=fp*0.10;
    // let finalPrice= fp+gst+sTax;

    // const onFinish = (values) => {
    //     console.log(values);
    //   };
   
    return(
        <>
        <HeaderTop/>
        {/* <div className="outer-div">
            <div className="main-divs">
            <h2 className="headings">Flight Details</h2>
                <div className="Flight_Detils">
                    <p>AirAsia india</p>
                    <p>Flight no: EGCA096</p>
                </div>  
                <div className="fromTo">
                    <h2>{fltFrom}</h2>
                    <img src={arrows}></img>
                    <h2>{fltTo}</h2>
                </div>
                <div className="datTime">
                    <table>
                        <tbody>
                            <tr>
                                <td><p>Date : </p></td>
                                <td><p>30/01/2021</p></td>
                            </tr>
                            <tr>
                                <td> <p>Time :</p> </td>
                                <td><p>{fltTime}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="fare_secation">
                    <h2 className="headings">Fare Details</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td><p>Basic Fare: </p></td>
                                <td><p>Rs. {fltPrice} /-</p></td>
                            </tr>
                            <tr>
                                <td> <p>GST 18% :</p> </td>
                                <td><p>Rs. {gst}/-</p></td>
                            </tr>
                            <tr>
                                <td> <p>STax 10% :</p> </td>
                                <td><p>Rs. {sTax}/-</p></td>
                            </tr>
                            <tr>
                                <td><h2>Total fare:</h2> </td>
                                <td> <h2>Rs. {finalPrice}/-</h2></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="btndiv">
                    <button className="payBtn">Proceed To Pay</button>
                </div>
              </div>
     */}
            {/* </div> */}

        </>
    );
}

export default BookFlight