import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import './BodyComp.css';
import arrow from './arrows.png';
import RadioBtn from './RadioBtn';
import { DatePicker, Space } from 'antd';
import LogninForm from './LogninForm'
import DisplayFlight from './FlightList';
// import NewDropDowns from './NewDropDown';
import FlightData from './FlightData';
// import SearchFlight from './SearchFlight';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import './TopHeaderStyle.css'
import {useState} from 'react';
import HeaderTop from './HeaderTop';
import { render } from '@testing-library/react';


function Bodycomponent(){
    
const { Option } = Select;

const provinceData =
 ['Select City',
'Delhi',
'Banglore',
'Patna',
'Gujrat',
'Shimla',
'Hydrabaad',
'Chennai',
'Kolkata',
];
    const [srcs, setSource]=useState(provinceData[0]);
    const handleProvinceChange=(e)=>{
      console.log(e);
      setSource(e)
    }
    const [dest, setDest]=useState(provinceData[0]);
    const handleProvinceChange1=(e)=>{
      console.log(e);
      setDest(e)
    }
// trying to put searchfligjt into the same file code starts here
const [data, setData] = useState(FlightData);
let x=srcs.toString();  
let y=dest.toString();  

let flight=null;
let allflight=null;
let filteredFlightData=[];

allflight=FlightData.map((f,index)=>{
    return <DisplayFlight data={f} key ={index}/>
});
const handelSearch = () => {
    const FlightData =[...data];
    filteredFlightData= FlightData.filter((item) =>  item.from===x && item.to ===y);
    setData(filteredFlightData);
    console.log(filteredFlightData);
    console.log(data);
     flight=data.map((p,index)=>{
        return <DisplayFlight data={p} key ={index}/>
    });      
    console.log(flight);
}
return(
    <>
    <HeaderTop/>
    <div className="main_div_full">
      <div className="bodyComp">
          <h2>Book a flight Now!!</h2>
          <div className="from-to" >
              <div>
                  <div className="drop-class">
                      <h3>From :</h3>
                      <Select defaultValue={provinceData[0]}  onChange={handleProvinceChange} className="drop-control">
                        {provinceData.map(province => (
                        <Option key={province}  className="menu-item">{province}</Option>
                        ))}
                      </Select>
                  </div>
              </div>
              <div>
                  <img id="arrows" src={arrow} alt="arrows"/>
              </div>
              <div>
                <div className="drop-class">
                    <h3>To: </h3>
                       <Select defaultValue={provinceData[0]}  onChange={handleProvinceChange1} className="drop-control">
                          {provinceData.map(province => (
                          <Option key={province}  className="menu-item">{province}</Option>
                          ))}
                      </Select>
               </div>
              </div>  
          </div>
          <div className="TripRadio">
                  <RadioBtn />
          </div>
        
              
            <div className="serch_div"> 
            <div className="btnDiv">
                <button id="searcBtn" onClick={handelSearch}>Search</button>
            </div>
                <p className="all-flights">Available Flights as per your Search: {data.length}   </p>
                    {flight}
            </div>
      </div>
      <div className="flights">
             <p className="all-flights">All Flights</p>
             {allflight}
      </div>
    </div>
    </>
)
             
}
export default Bodycomponent