import React from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Button } from 'antd';
import {useNavigate} from 'react-router-dom'
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
      await axios.post("http://localhost:3001/api/users", {
        username: values.username,
        password: values.password,
        firstname: values.Firstname,
        lastname: values.Lastname,
          email: values.email,      
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
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
     
      <Form.Item wrapperCol={{span:2, offset: 11 }}>
        <Button block type="danger" htmlType="submit">
          Submit
        </Button>
     
      </Form.Item>
    </Form>
    </>
  );
};

export default RegisterForm;