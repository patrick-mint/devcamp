import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Navbar from './Navbar'
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeLastname, changeAge } from "./profileReducer";
import { Layout, Breadcrumb } from 'antd';
const {  Footer } = Layout;

function App() {

  return (
    <>
      <Layout className="layout App">

        <Navbar />



        <Breadcrumb
          style={{
            margin: '50px 10px',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content"></div>

        <ProfileComp />
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      );

      </>
  )
}
function ProfileComp() {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <>
      <p>
        Firstname: <input type="text" onChange={(e) => dispatch(changeName(e.target.value))} />
      </p>
      <p>
        Lastname: <input type="text" onChange={(e) => dispatch(changeLastname(e.target.value))} />
      </p>
      <p>
        Age: <input type="text" onChange={(e) => dispatch(changeAge(e.target.value))} />
      </p>
      <p>{JSON.stringify(profile)}</p>
    </>
  );
}

export default App;