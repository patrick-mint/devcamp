import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Data from './Table_Data'
import UpdateProduct from './UpdateProduct';
import Create from './Create'
import ErrorPage from './ErrorPage'
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import Logout from './components/Logout';
import axios from 'axios';

axios.defaults.baseURL = "http://13.228.30.203:3000";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Data />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit_product/:id" element={<UpdateProduct />} />
          <Route path="/view_product/:id" element={<ViewProduct />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/data" element={<Data />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
