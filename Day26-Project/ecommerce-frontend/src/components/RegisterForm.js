import React from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Button } from 'antd';
import {useNavigate, Link} from 'react-router-dom'
import '../App.css';


const axios = require("axios");

const layout = {
  labelCol: {
    span: 6 ,
  },
  wrapperCol: {
    span: 12,
  },
};

const RegisterForm = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    const myFunction = async ()=> {
      await axios.post("/api/users", {
        username: values.username,
        password: values.password,
        firstname: values.Firstname,
        lastname: values.Lastname,
          email: values.email,  
          mobile: values.mobile,     
      });
      
      alert("Thank you for submitting the form!")
      document.getElementById('resetForm').reset();
      navigate('/login');
    };
    myFunction();
  };
         

  return (
    <>
    <h1 className="middle"> Register Section</h1>
    
    <Form 
    {...layout} 
    id = "resetForm"
    name="nest-messages" 
    onFinish={onFinish} 
    autoComplete={"off"}>
     <Form.Item 
        name={['username']}
        label="Username"
        rules={[
          {
            min: 1,
            max: 30,
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item 
        name={['password']}
        label="Password"
        rules={[
          {
            min: 1,
            max: 200,
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item 
        name={['Firstname']}
        label="First Name"
        rules={[
          {
            min: 1,
            max: 30,
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item 
        name={['Lastname']}
        label="Last Name"
        
        hasFeedback
      >
        <Input />
      </Form.Item>


      <Form.Item 
        name={['email']}
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
            message: "The input is not valid E-mail!",
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item 
        name={['mobile']}
        label="Mobile Phone"
        
        hasFeedback
      >
        <Input />
      </Form.Item>
     
      <Form.Item wrapperCol={{span:20, offset: 10 }}>
      <Button type="primary" htmlType="submit">
             Submit
           </Button> 
           <Link style={{ margin : 10}}to="/login"><button type="button"> Back  </button></Link>
      </Form.Item>

    </Form>
    </>
  );
};

export default RegisterForm;