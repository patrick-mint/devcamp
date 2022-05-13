import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import ContentComponent from './Content';
import { Layout, Menu, Breadcrumb } from 'antd';


const { Header, Content, Footer } = Layout;

function App() {
  let menu = ["Home", "Portfolio", "Contact"]
   return (
   <>
 <Layout className="layout">
     <Header>
       <div className="logo" />
       <Menu
         theme="dark"
         mode="horizontal"
         defaultSelectedKeys={['2']}
         items={menu.map((i) => {
           return {
             key : i
             ,label: i};
         })}
       />
     </Header>
     <Content style={{ padding: '0 50px' }}>
       <Breadcrumb style={{ margin: '16px 0' }}>
         <Breadcrumb.Item>Home</Breadcrumb.Item>
         <Breadcrumb.Item>List</Breadcrumb.Item>
         <Breadcrumb.Item>App</Breadcrumb.Item>
       </Breadcrumb>
       <div className="site-layout-content"><ContentComponent/></div>
    
     </Content>
     <Footer style={{ textAlign: 'center' }}>Ben Design ©2022</Footer>
   </Layout>
 </>
   )
 }
 
 export default App;
 