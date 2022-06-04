import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Table_Data from './Table_Data'
import RegisterForm from './RegisterForm'
import UpdateProduct from './UpdateProduct';
import ErrorPage from './ErrorPage'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Table_Data />} />
          <Route path="/create" element={<RegisterForm />} />
          <Route path="/edit_product/:id" element={<UpdateProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
