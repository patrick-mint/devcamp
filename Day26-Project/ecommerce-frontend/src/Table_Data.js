import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';
import { Avatar, Table, Button } from 'antd';
import axios from 'axios'
import { AntDesignOutlined } from '@ant-design/icons';
import { initData } from './productItems'

function Data() {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const display = useSelector(state => state.product);
  const navigate = useNavigate()

  const deleteProduct = async (id) => {
    window.confirm("Do you want to delete this item?")
    try {
      await axios.delete(`/api/product/${id}`)
      // ForceRender
      setCheck(!check);
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
    <h1 className="middle"> All Products</h1>
      <Table
        rowKey={(data) => data.id}
        columns={columns}
        dataSource={data}
        pagination={false} />
      <a href="/create">
        <Button type="primary" className="right">Create</Button>
      </a>
    </>
  )
}

export default Data;