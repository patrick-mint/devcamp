import { Button, Form, Input, Space } from 'antd';
import "antd/dist/antd.css";
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'

export default function Login() {
 const [form] = Form.useForm();
 let navigate = useNavigate();
 const onFinish = async (values) => {
   // call backend here
   try {
    const result = await axios.post('/api/auth/token', {
      username: values.username,
      password: values.password,
    });
    localStorage.setItem('token', result.data.token);
    navigate('/data');
  } catch (e) {
    form.setFields([
      {
        name: 'password',
        errors: ['Wrong Password'],
        // errors: [e.response.data.error],
      },
    ]);
  }

 };

 
 return (
   <div
     style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}
   >
     <Space>
       <Form form={form} onFinish={onFinish}>
         <Form.Item
           name="username"
           label="Username"
           labelCol={{ span: 8 }}
           wrapperCol={{ span: 20 }}
           rules={[
             {
               required: true,
             },
           ]}
         >
           <Input />
         </Form.Item>
        

         <Form.Item
           name="password"
           label="Password"
           labelCol={{ span: 8 }}
           wrapperCol={{ span: 20 }}
           rules={[
             {
               required: true,
             },
           ]}
         >
           <Input.Password />
         </Form.Item>

       
         <Form.Item wrapperCol={{span:20, offset: 8 }}>
           <Button type="primary" htmlType="submit">
             Login
           </Button> 
           <Link style={{ margin : 10}}to="/register"><button type="button"> Register  </button></Link>
         </Form.Item>
       </Form>
       
     </Space>
   </div>
 );
}

