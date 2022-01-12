import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined,GoogleOutlined } from '@ant-design/icons';
import HeaderTop from './HeaderTop';
import './FormS.css'


const SignUpForm = () => {
  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    if(values.password === values.cnfpassword){
      
      window.location.href="http://localhost:3000/Login/"; 
      alert('Successfully Registered!'); 
    
   }else{
      alert("Sorry! Give one more try");
      
  }
  };

  return (
      <>
      <HeaderTop/>
      <div className="form_main_div">
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      className="loginform"
    >
    <p><strong>Sign-Up Form</strong></p>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email',
          },
        ]}
      >
        <Input type='email' prefix={<GoogleOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="cnfpassword"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Conform Password"
        />
      </Form.Item>

    
    

      <Form.Item>
      <button>Sign-Up</button>
        
      </Form.Item>
      <Form.Item>
     <p>Already Registered! <Link to="/Login"><Button type="primary" htmlType="submit" className="login-form-button">
          Log-in
        </Button></Link></p>
      </Form.Item>
    </Form>
    </div>
    </>
  );
};

export default SignUpForm
