import { Form, Input, Button, Checkbox } from 'antd';


const FormComp = () => {
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const customValidate = (rule, value) => {
      console.log(value);
      if (value === 'test'){
        return Promise.resolve();
      } else {
        return Promise.reject (new Error('ใส่ข้อมูลไม่ถูกต้อง'));
      }
    };
  
    return (
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 12,
        }}
        initialValues={{
          remember: true,
          // username ต้องตรงกันname ที่ตั้งไว้
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete off คือ ไม่ต้องขึ้นไอดี พาสที่เคสใส่
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              validator: customValidate,
              // required: true,
              // message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default FormComp;