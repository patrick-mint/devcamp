import React, { useState }from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Modal, Form, Input, InputNumber, Button, Radio , Select , DatePicker, Checkbox  } from 'antd';
import moment from 'moment';

// CheckBox

function onCheck(e) {
  console.log(`checked = ${e.target.checked}`);
}

// Disable Date

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

const layout = {
  labelCol: {
    span: 6 ,
  },
  wrapperCol: {
    span: 12,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    text: '${label} should not over 50 Character!',
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },

};
 
// Set Age

const customAgeRangValidation = (rule, value) => {
  if (value < 18){
    return Promise.reject(new Error('You are too young to register!')) ;
  }
  else if (value > 60 && value <= 99){
    return Promise.reject(new Error('You are too old to register!')) ;
  } 
  else if (value > 99) {
    return Promise.reject(new Error('Error: Maximum number of age is 99!'));
  } else {
    return Promise.resolve()
  }
};



/* eslint-enable no-template-curly-in-string */
/****Option Select***/

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log('search:', val);
}

const ContentComponent = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" 
    onFinish={onFinish} 
    validateMessages={validateMessages }
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
        name={['age']}
        label="Age"
        rules={[
          {
            required: true,
          },
          {validator: customAgeRangValidation},
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={['sex']}
        label="Sex"
        rules={[
          {
            required: true,
          },
        ]}
        >
      <Radio.Group style={{marginBottom: '20px'}} >
                    <Radio value={1}>Male</Radio>
                    <Radio value={2}>Female</Radio>
                    <Radio value={3}>Others</Radio>
                </Radio.Group>
                </Form.Item>
      <Form.Item name={['province']}
        label="Province"
        >
                <Select defaultValue="Bangkok"
                    showSearch
                    placeholder="Select a Province"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }>
                    <Option value="Bangkok">Bangkok</Option>
                    <Option value="Chiangmai">Chiangmai</Option>
                    <Option value="Phuket">Phuket</Option>
                    <Option value="Khon Kaen">Khon Kaen</Option>
                    <Option value="Krabi">Krabi</Option>
                    <Option value="other">Others</Option>  
                </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.province !== currentValues.province}
      >
        {({ getFieldValue }) =>
          getFieldValue('province') === 'other' ? (
            <Form.Item
              name="customizeProvince"
              label="Province"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input value=""
              />
            </Form.Item>
          ) : null
        }
      </Form.Item>

      <Form.Item name={['datePicker']} 
      label="Member Period">
     
    
    <DatePicker picker = "date"
      format="YYYY-MM-DD"
      disabledDate={disabledDate}
     
    />
           
      </Form.Item>
      <Form.Item name={['agreement']} wrapperCol={{ offset: 6 }} valuePropName="checked" 
      
      rules={[
          {
            validator:(_, value) =>
            value
            ? Promise.resolve ()
            : Promise.reject(
              "Please accept Terms and Conditions"
            ),
          },
        ]}>
      <Checkbox onChange={onCheck}>Click here to indicate that you have read and agree to the terms presented in the <a href="#" >Terms and Conditions agreement</a></Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{span:2, offset: 6 }}>
        <Button block type="primary" htmlType="submit">
          Register
        </Button>
     
      </Form.Item>
    </Form>
  );
};


export default ContentComponent;