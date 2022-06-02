import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Button } from 'antd';
import axios from 'axios'

function Data() {
  const [data, setData] = useState("");
  const [check, setCheck] = useState(false);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/product/${id}`)
      // ForceRender
      setCheck(!check);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    axios.get("/api/product").then((response) => {
      setData(response.data)
    });
    console.log(data);
  }, [check]);

  const columns = [
    {
      title: 'Photo',
      dataIndex: 'Photo',
      key: 'Photo',
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
      render: ((_, record) =>
        <div>
          <Button type="primary">Edit</Button>
          <span style={{ marginLeft: "20px" }}><Button type="primary" danger onClick={() => deleteProduct(record.id)}>Delete</Button> </span>
        </div>
      ),
    },
  ];
  return (
    <>
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