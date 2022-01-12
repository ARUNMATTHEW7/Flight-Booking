import React, { Component } from 'react';
import './Bookflight.css';
import arrows from './arrows.png';
import HeaderTop from './HeaderTop';
import {Link} from 'react-router-dom';
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

function UserDetails(props){
   
    const onFinish = (values) => {
        console.log(values);
      };
    
   
    return(
        <>
        <HeaderTop/>
        <div className="outer-div">
                <div className="main-divs">
                    <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                    {
                        type: 'email',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'age']}
                    label="Age"
                    rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Website">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item >
                    <Button htmlType="submit">
                    <Link to={{
                  pathname:'/BookFlight',
                  bookProps:{
                    // data:values,
                    data:props.data,
                
                  }
                }}
               >book now </Link> 
                    </Button>
                </Form.Item>
                </Form>
    

            </div>
        </div>
        </>
    );
}

export default UserDetails