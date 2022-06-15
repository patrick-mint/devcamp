import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import { Avatar, Table, Button } from 'antd';
import axios from 'axios'
import { AntDesignOutlined } from '@ant-design/icons';
import { initData } from './productItems'
import './App.css';
// need to install jwt-decode    
import jwt_decode from 'jwt-decode';

function Data() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const display = useSelector(state => state.product);
  const navigate = useNavigate()
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState([]);
 
  useEffect(() => {
    const token = localStorage.getItem('token');
 
    if (token) {
     const token = localStorage.getItem('token');
     //    decode token
        var decoded = jwt_decode(token);
        console.log(decoded);
     //    call username by using useState 
        const username = decoded.username; 
        setUsername(username);
      axios
        .get('/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`, // JWT in Authorization header
          },
        })
        .then((res) => {
          setCart(res.data);
          console.log('res data',res);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            // token expired - remove and redirect to login
            localStorage.removeItem('token');
            navigate('/login');
          }
        });
    } else {
      navigate('/login');
    }
 
  }, []);
 
  const deleteProduct = async (id) => {
    window.confirm("Do you want to delete this item?")
    try {
      await axios.delete(`/api/product/${id}`)
      // ForceRender
      window.location.href = "/";
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    axios.get("/api/product").then(result => dispatch(initData(result.data)))
      .catch(e => console.log(e))
  }, []);

  useEffect(() => {
    setData(display.productList)
  }, [display.productList])

  // Edit Product

  const onEdit = (e, index) => {
    e.preventDefault()
    navigate(`/edit_product/${index}`)
  }

  const columns = [
    {
      title: 'Photo',
      dataIndex: 'Photo',
      key: 'Photo',
      render: () => (
        <Avatar
          size={{
            xs: 24,
            sm: 28,
            md: 32,
            lg: 40,
            xl: 60,
            xxl: 80,
          }}
          icon={<AntDesignOutlined />}
        />
      )
    },
    {
      title: 'Product Name',
      dataIndex: 'product_name',
      key: 'product_name',
      render: (data, record, index) => (
        <a onClick={(e) => navigate(`/view_product/${index}`)}>{data}</a>
      ),
    },
    
    {
      title: 'Stock Left',
      dataIndex: 'stock_left',
      key: 'stock_left',

    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },

    {
      title: 'Action',
      key: 'action',
      render: ((_, record, i) =>
        <div>
          <Button type="primary" onClick={e => onEdit(e, i)}>
            EDIT
          </Button>
          <span style={{ marginLeft: "20px" }}><Button type="primary" danger onClick={() => deleteProduct(record.id)}>Delete</Button> </span>
        </div>
      ),
    },
  ];
  return (
    <>
     <h2 className = "login">Hey {username}, welcome!  </h2> <Link className = "login" to="/logout">
     <button type="button">
          Logout
     </button>
 </Link>
    <h1 className="middle"> All Products</h1>
      <Table
        rowKey={(data) => data.id}
        columns={columns}
        dataSource={data}
        pagination={false} />
      <Link to="/create" >
        <Button type="primary" className="right">Create</Button>
      </Link>

      {/* <h2 className = 'space'> welcome to your page!</h2>
     <h3 className = "space">My shopping cart items</h3>
     <ul className = "space">{cart && cart.map((c) => <li>{c.item}</li>)}</ul> */}
    </>
  )
}

export default Data;