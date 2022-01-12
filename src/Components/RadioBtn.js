

import React, { Component } from 'react'
import { Radio } from 'antd';
import "antd/dist/antd.css";

import './BodyComp.css';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
function disabledDate(current) {
    // Can not select days before today and today
    return current && current.valueOf() < Date.now();
  }

class RadioBtn extends Component {
    state={
        value: 0
    }
    
    onChange =(e) =>{
        console.log('Radio clicked'+ e.target.value)
        this.setState({
            value: e.target.value
        })
    }
    onChanges=(date, dateString)=>{
        console.log(date, dateString);
        console.log(dateString)
    }
    
    render(){
        let display=null;
        if(this.state.value){
            display = 
           <div className="date-selecter">
            <div className="departdate">
              <p className="p-tag">Departure date:</p>
                <Space direction="vertical">
                <DatePicker  disabledDate={disabledDate} onChange={(date,dateString)=>this.onChanges(date,dateString) }/>
                </Space>
            </div>
            <div className="returndate">
              <p className="p-tag">Return date:</p>
                <Space direction="vertical">
                <DatePicker disabledDate={disabledDate} onChange={(date,dateString)=>this.onChanges(date,dateString)}/>
                </Space>
            </div>
          </div>
           
        }else{
            display=
            <div className="departonly">
            <p className="p-tag">Departure date:</p>
            <Space direction="vertical">
            <DatePicker disabledDate={disabledDate} onChange={(date,dateString)=>this.onChanges(date,dateString)}/>
            </Space>
            </div>
        }
        return(
            <div>
        <div>
           <Radio.Group onChange={this.onChange}value={this.state.value}>
            <Radio className="radio-btn" value={0}>One Way</Radio>
            <Radio className="radio-btn" value={1}>Both Way</Radio>
             </Radio.Group>
          </div>
            {display}
            </div>
        );
    }  
}

export default RadioBtn