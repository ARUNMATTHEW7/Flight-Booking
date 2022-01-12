import FlightData from './FlightData';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import NewDropDown from './NewDropDown';
import FlightList from './FlightList';
import './BodyComp.css';


const SearchFlight=({srcs, dest})=>{
    const [data, setData] = useState(FlightData);
    const [DoShow,setDoShow] =useState(false);
    let x=srcs.toString();  
    let y=dest.toString();  

    let filteredFlightData=[];
    const handelSearch = () => {
        const FlightData =[...data];
        filteredFlightData= FlightData.filter((item) =>  item.from===x && item.to ===y);
        console.log(filteredFlightData);
        setData(filteredFlightData);
        if(filteredFlightData.length > 0){
            setDoShow(true);
            }
          }
        let showTable =null;
        let ShowMsg=null;
        if(DoShow){
            showTable =<FlightList list={data}/>
        }
        else
        {
            ShowMsg= <h3 className="no_flight_msg">'sorry! No flight  is available on this route'</h3>
        }
    
     
    return(
        <>
        <div className="serch_div">
            <div className="btnDiv">
                <button id="searcBtn" onClick={handelSearch}>Search</button>
            </div>
            <div>
            <p className="all-flights">Available Flights as per your Search: {data.length}   </p>
                {showTable}
                {ShowMsg}
            </div>
        </div>
       
       
        </>
    )
}

export default SearchFlight