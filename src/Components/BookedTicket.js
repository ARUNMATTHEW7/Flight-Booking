import { render } from '@testing-library/react';
import { configConsumerProps } from 'antd/lib/config-provider';
import React from  'react';
import './Bookflight.css'
import logo from './plane.png';

function BookedTicket(props) {
    console.log(props.location.tProps);
    let uname=props.location.tProps.tdata.cName;
    let umob=props.location.tProps.tdata.cMob;
    let usex=props.location.tProps.tdata.cSex;
    let umail=props.location.tProps.tdata.cMail;
    let fclass=props.location.tProps.tdata.class;
    let fdate=props.location.tProps.tdata.fdate;

    let fname=props.location.tProps.tdata.data.name;
    let ffrom=props.location.tProps.tdata.data.from;
    let fto=props.location.tProps.tdata.data.to;
    let fprice=props.location.tProps.tdata.fprice;
    let ftime=props.location.tProps.tdata.data.time;
    let fno=props.location.tProps.tdata.data.fno;
    
    return(
        <>
            <div className="outer-div">
                <div className="main-divss">
                <div className="headerClass">
            <a><img id="ggg" src={logo}></img><text>AmtFly  </text></a> 
                <h2>  Fly in the Sky...!</h2>
                </div>
                <h2 className="headingss">Cutomer Details</h2>
                    <div className="CutomerDetails">
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td><p>Name : </p></td>
                                    <td><p>{uname}</p></td>
                                </tr>
                                <tr>
                                    <td><p>Contact No : </p></td>
                                    <td><p>{umob}</p></td>
                                </tr>  
                            </tbody>
                        </table>
                        </div>
                        <div>
                        <table>
                            <tbody>
                            <tr>
                                    <td> <p>Sex :</p> </td>
                                    <td><p>{usex}</p></td>
                                </tr>
                                <tr>
                                    <td> <p>Mail Id : </p> </td>
                                    <td><p>{umail}</p></td>
                                </tr>
                            </tbody>
                        </table>
                        </div> 
                    </div>

                <h2 className="headingss">Flight Details</h2>
                    <div className="CutomerDetails">
                    <div>
                    <table>
                            <tbody>
                                <tr>
                                    <td><p>Flight no: </p></td>
                                    <td><p>{fno}</p></td>
                                </tr>
                                <tr>
                                    <td><p>From: </p></td>
                                    <td><p>{ffrom}</p></td>
                                </tr>
                                <tr>
                                    <td><p>Date : </p></td>
                                    <td><p>{fdate}</p></td>
                                </tr>
                                <tr>
                                    <td> <p>Class :</p> </td>
                                    <td><p>{fclass}</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                    <table>
                            <tbody>
                            <tr>
                                    <td> <p>company :</p> </td>
                                    <td><p>{fname}</p></td>
                                </tr>
                                <tr>
                                    <td> <p>To  :</p> </td>
                                    <td><p>{fto}</p></td>
                                </tr>
                                <tr>
                                            <td> <p>Time :</p> </td>
                                            <td><p>{ftime}</p></td>
                                        </tr>
                            </tbody>
                        </table>
                    </div> 
            
                    </div>
                    <h2 className="headingss">Payment Details</h2>
                    <div className="CutomerDetails">
                        <table>
                            <tbody>
                                <tr>
                                    <td><p>Fees: </p></td>
                                    <td><p>{fprice}\-</p></td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td><h3>Status: </h3></td>
                                    <td><h3>Paid</h3></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bottumd-div">
                    
                        <button className="ttt">Download</button>
                        <button className="ttt">Print</button>
                    </div>  
                </div>
            </div>
        </>
    );  
}
export default BookedTicket;