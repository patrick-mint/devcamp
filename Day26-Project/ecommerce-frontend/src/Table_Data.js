import React , {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Avatar } from 'antd';
import axios from 'axios'
import { UserOutlined } from '@ant-design/icons';


const columns = [
  {
    title: 'Photo',
    dataIndex: 'Photo',
    key: 'Photo',
  },
  {
    title: 'Product Name',
    dataIndex: 'Product_name',
    key: 'Product_name',
    render: (x) => <a src={'/id:'}>{x}</a>,
  },
  {
    title: 'Stock Left',
    dataIndex: 'Stock_left',
    key: 'Stock_left',
  },
  {
    title: 'Category',
    dataIndex: 'Category',
    key: 'Category',
  },

  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <>
        <a>Edit</a><br />
        <a>Delete</a>
      </>
    ),
  },
];

function Data () {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("/api/product").then((response) => {setData(response.data)
    });
    console.log(data);
  },[]);

return (
  <>
    <Table columns={columns}
      dataSource={data}
      pagination={false} />
    <a href="/create">
      <button className="right">Create</button>
    </a>


  </>
)
}


export default Data;