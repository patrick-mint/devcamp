import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import {Form, Input, Button } from 'antd';

const axios = require("axios");

const layout = {
  labelCol: {
    span: 6 ,
  },
  wrapperCol: {
    span: 12,
  },
};

const Employee = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    const myFunction = async ()=> {
      await axios.post("http://localhost:3001/api/employee", {
        firstname: values.Firstname,
        lastname: values.Lastname,
          phone: values.phone,
          email: values.email,      
          address: values.address,
          subdistrict: values.subdistrict,  
          district: values.district,          
          province: values.province,       
          postcode: values.postcode,   
          id_number: values.id_number,
      });
      await axios.post("http://localhost:3001/api/company", {
        company_name: values.company_name,         
        company_address: values.company_address,
        work_experience: values.work_experience, 
        position: values.position,
        id_number: values.id_number,
      });
      alert("Thank you for submitting the form!")
    }
    myFunction();
  };
         

  return (
    <>
    <h1> Personnel Section</h1>
    
    <Form {...layout} name="nest-messages" 
    onFinish={onFinish} 
    autoComplete={"off"}>
      <Form.Item 
        name={['Firstname']}
        label="First Name"
        rules={[
          {
            min: 1,
            max: 50,
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
        rules={[
          {
            min: 1,
            max: 50,
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item 
        name={['phone']}
        label="Phone"
        rules={[
          {
            required: true,
          },
        ]}
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
      <Form.Item 
        name={['address']}
        label="Address"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name={['subdistrict']}
        label="Sub District"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name={['district']}
        label="District"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name={['province']}
        label="Province"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name={['postcode']}
        label="Postcode"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name={['id_number']}
        label="ID Number"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item 
        name={['company_name']}
        label="Company Name"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item 
        name={['company_address']}
        label="Company Address"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item 
        name={['work_experience']}
        label="Work Experience"
        rules={[
          {
            required: true,
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item 
        name={['position']}
        label="Position"
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
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
     
      </Form.Item>
    </Form>
    </>
  );
};

export default Employee;