import { Form, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom';
import './FormS.css'
import SignUpForm from './SignUpForm';
import HeaderTop from './HeaderTop';
import { UserOutlined, LockOutlined,GoogleOutlined } from '@ant-design/icons';

const LogninForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    if(values.username === 'admin' && values.password==='admin'){
      
      window.location.href="http://localhost:3000/Home/"; 
      alert('Log-In Successfull Welcome to home'); 
    
   }else{
      alert("Sorry! Give one more try");
      
  }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    <HeaderTop/>
    <div className="form_main_div">
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed} className="loginform"
    >
  <p><strong> Log-In Form</strong></p>
     
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

      <Form.Item  name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

       <Form.Item >
       <button>Log-in</button>
      </Form.Item> 
      <Form.Item>
     <p>New User ??  <Link to="/SignUpForm"><Button type="primary" htmlType="submit" className="login-form-button">
     Rgister now
        </Button></Link></p>
      </Form.Item>
    </Form>
    </div>
    </>
  );
};

export default LogninForm