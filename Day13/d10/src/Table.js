import { Table, Tag,} from 'antd';
import { Button, notification } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
const columns = [
  {
    title: 'Avatar',
    key: 'Avatar',
    dataIndex: 'avatar',
  },  
  {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (data, record) => {
            console.log(data,record);
            return(data)
        }},
        {
          title: 'Age',
          key: 'age',
          dataIndex: 'age',
        },
    
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
      },
      {
        title: 'Button',
        dataIndex: 'button',
        key: 'button',
        },
];



const data = [
{    key: '1',
    avatar: <Avatar size={32} icon={<UserOutlined />} />,
    name: 'John Brown',
    age: 28,
    tags: [<Tag color="green">Green</Tag>, <Tag color="geekblue">Blue</Tag>],
    button:  <Button type="primary" onClick= {openNotification}>Notification</Button>,
   
},
{
    key: '2',
    avatar: <Avatar size={32} icon={<UserOutlined />} />,
    name: 'Jim Green',
    age: 98,
    tags: [<Tag color="volcano">Volcano</Tag>],
    button:  <Button type="primary" onClick= {openNotification}>Notification</Button>,
    
  },
  {
    key: '3',
    avatar: <Avatar size={32} icon={<UserOutlined />} />,
    name: 'Joe Black',
    age: 22,
    tags: [<Tag color="geekblue">Geek Blue</Tag>, <Tag color="blue">Blue</Tag>],
    button:  <Button type="primary" onClick= {openNotification}>Notification</Button>,
    
  },
];

const TableComp = () => {
    return <>
    <Table columns={columns} dataSource={data}/>
    </>;
};


export default TableComp;