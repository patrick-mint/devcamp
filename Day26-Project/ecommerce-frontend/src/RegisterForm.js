import React from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Button } from 'antd';
import {useNavigate, Link} from 'react-router-dom'
import './App.css';


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
      await axios.post("/api/product", {
        product_name: values.product_name,
        stock_left: values.stock_left,
        category: values.category,   
      });
      
      alert("Thank you for submitting the form!")
      document.getElementById('resetForm').reset();
      navigate('/');
    };
    myFunction();
  };
         

  return (
    <>
    <h1 className="middle"> New Product</h1>
    
    <Form 
    {...layout} 
    id = "resetForm"
    name="nest-messages" 
    onFinish={onFinish} 
    autoComplete={"off"}>
     <Form.Item 
        name={['product_name']}
        label="Product Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item 
        name={['stock_left']}
        label="Stock Left"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item 
        name={['category']}
        label="Category"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{span:20, offset: 10 }}>
      <Button type="danger" htmlType="submit">
             Create
           </Button> 
           <Link style={{ margin : 10}} to="/"><button type="button"> Back to Dashboard </button></Link>
      </Form.Item>

    </Form>
    </>
  );
};

export default RegisterForm;