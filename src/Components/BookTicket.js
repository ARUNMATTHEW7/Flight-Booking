import React, {Component } from 'react';
import { DatePicker, Space,Button,Form, Input, InputNumber,Select   } from 'antd';
import './Bookflight.css';
import './FormS.css';
import plane from './plane.png';
import RadioBtn from './RadioBtn';
import {Link} from 'react-router-dom';
import moment from 'moment';
function disabledDate(current) {
    // Can not select days before today and today
    return current && current.valueOf() < Date.now();
  }

const { Option } = Select;


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

class BookTicket extends Component{
    constructor(props){
        super(props);
        this.state={
            
            data: props.data,
            fprice:props.data.price,
           cName:'',
           cMail:'',
           cMob:'',
           cSex:'',
           tripway:false,
           class:'',
           fdate:'',
        }
       
    }
    updatecname(event) {
        this.setState({
            cName: event.target.value,
        });
      }
      updatecmail(event) {
        this.setState({
            cMail: event.target.value,
        });
      }
      updatecage(event) {
        this.setState({
            cSex: event.target.value,
        });
      }
      updatecmob(event) {
        this.setState({
            cMob: event.target.value,
        });
      }
      oneWayButtonHandler=() =>{
        this.setState({
            tripway: false
        })
    }
    roundTripButtonHandler=() =>{
        this.setState({
            tripway: true
          
        })
    }
      priceHandler =(value)=>{
        console.log(value);
        this.setState({class: value});
         let fltPrice=this.state.fprice;
        let fp= parseInt(fltPrice, 10);
    
        if(value ==='Economy'){
            this.setState({fprice: fp })
        }else if(value ==='Premium Economy'){
            this.setState({fprice: fp + 2000 })
         }else if(value =='Business'){
            this.setState({fprice: fp + 5000 })
    }else {
        this.setState({fprice: fp + 10000 })
    }
    }
   
    onChanges=(date, dateString)=>{
        console.log({date, dateString});
        console.log(dateString);
        this.setState({fdate: dateString} );
    }
    render(){
        let fltPrice=this.state.fprice;
        let fp= parseInt(fltPrice, 10);
        let gst=fp*0.18;
        let sTax=fp*0.10;
        let finalPrice= fp+gst+sTax;
        let oneWayTypeStyle = this.state.tripway ? 'dashed' : 'primary';
       
        let roundTripTypeStyle = this.state.tripway ? 'primary' : 'dashed';

        return(
            <div className="maindivbooking">
                 <div className="inner_cont_div_fromto">
                    <h1 className="from_flt">{this.props.data.from}</h1>
                    <img className="flightlogo" src={plane}></img>
                    <h1 className="from_flt">{this.props.data.to}</h1>  
                </div>
                <div className="roundbtndiv">
                <Button type={oneWayTypeStyle} onClick={this.oneWayButtonHandler} >One Way</Button>
                <Button type={roundTripTypeStyle} onClick={this.roundTripButtonHandler}>Round Trip</Button>
                </div>
                <Form name="nest-messages" onFinish={this.props.okclicked} validateMessages={validateMessages}>
               
                   <Form.Item
                    
                     label="Name"
                     rules={[
                         {
                        type:'text',
                        required: true,
                         },
                         ]}
                    >
                        <input
                    value={this.state.cname}
                    onChange={this.updatecname.bind(this)}
                    placeholder="enter your name "
                />
                    </Form.Item>
                    <Form.Item
                    label="Email"
                    rules={[
                        {
                        type: 'email',
                        required: true,
                        },
                    ]}
                    >
                   <input
                    value={this.state.cMail}
                    onChange={this.updatecmail.bind(this)}
                    placeholder="enter your email "
                />
                
                    </Form.Item>
                    <Form.Item
                    label="Mob"
                    rules={[
                        {
                        type: 'number',
                        required: true,
                        },
                    ]}
                    >
                   <input
                    value={this.state.cMob}
                    onChange={this.updatecmob.bind(this)}
                    />
                    </Form.Item>
                    
                    <Form.Item
                    label="Sex"
                    rules={[
                        {
                        type: 'text',
                        min: 0,
                        max: 99,
                        required: true,
                        },
                    ]}
                    >
                   <input
                    value={this.state.cSex}
                    onChange={this.updatecage.bind(this)}
                    />
                    </Form.Item>
                    <Form.Item 
                        name={['user','departure']}
                        label="Departure"
                        rules={[
                            {
                                type: 'object',
                                required: true,
                            },
                        ]}
                        >
                            <DatePicker disabledDate={disabledDate} onChange={(date,dateString)=>this.onChanges(date,dateString)} />
                        </Form.Item>

                    {
                        this.state.tripway ? <Form.Item 
                        name={['user','departure']}
                        label="Return"
                        rules={[
                            {
                                type: 'object',
                                required: true,
                            },
                        ]}
                        >
                            <DatePicker disabledDate={disabledDate} onChange={(date,dateString)=>this.onChanges(date,dateString)} />
                        </Form.Item>: null
                    }
                    <Form.Item
                        name={['user', 'travelclass']}
                        label="Travel Class"
                        rules={[
                        {
                          required: true,
                        },
                         ]}
                    >
                        <Select onSelect={this.priceHandler}>
                            <Option value='Economy'>Economy</Option>
                            <Option value='Premium Economy'>Premium Economy</Option>
                            <Option value='Business'>Business</Option>
                            <Option value='First'>First</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item 
                        name={['user', 'price']}
                        label="Basic Fare"
                        rules={[
                            {
                            type: 'number'
                            },
                        ]}
                    >
                        {"Rs "+fp}
                    </Form.Item>
                    <Form.Item 
                        name={['user', 'price']}
                        label="Gst 18%"
                        rules={[
                            {
                            type: 'number'
                            },
                        ]}
                    >
                        {"Rs "+gst}
                    </Form.Item>
                    <Form.Item 
                        name={['user', 'price']}
                        label="STax 10%"
                        rules={[
                            {
                            type: 'number'
                            },
                        ]}
                    >
                        {"Rs "+sTax}
                    </Form.Item>
                    <Form.Item 
                        name={['user', 'price']}
                        label="Fianl Price 10%"
                        rules={[
                            {
                            type: 'number'
                            },
                        ]}
                    >
                        {"Rs "+finalPrice}
                    </Form.Item>
                    <Form.Item className='Book-submit' >
                    <Button className='cancel-button' onClick={this.props.cancelclicked}>Cancel</Button>
                  
                    <Link to={{
                            pathname:'/BookedTicket',
                            tProps:{
                            tdata:this.state,
                            }
                            }} className="payBtn"
                            >  <Button  htmlType="submit" className="payBtn">Pay now   </Button></Link>
                             
                    </Form.Item> 
              </Form>
            </div>
        );
    }
}

export default BookTicket