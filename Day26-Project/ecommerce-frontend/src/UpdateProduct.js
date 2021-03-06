import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

function UpdateProduct() {
    // const navigate = useNavigate();
    const product = useSelector((state) => state.product);
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        setData(product.productList[Number.parseInt(id)])
        // console.log(product.productList[Number.parseInt(id)]);
    }, [product.productList]);

    const item = product.productList[Number.parseInt(id)];
    const product_name = item.product_name;
    const stock_left = item.stock_left;
    const category = item.category;

    const layout = {
        labelCol: {
          span: 8 ,
        },
        wrapperCol: {
          span: 10,
        },
      };

    const onUpdateForm = async (values) => {

        console.log(values);
        try {
            await axios.put(`/api/product/${data.id}`, {
                product_name: values.product_name,
                stock_left: values.stock_left,
                category: values.category
            })

        } catch (e) {
            console.log(e);
        }
        window.location.href = '/';
    }

    return (
        <div>
              <h1 className="middle"> Update Product</h1>
            <Form
                style={{
                    marginTop: 50
                }}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}

                autoComplete="off"
                {...layout}
                onFinish={onUpdateForm}
            >
                <Form.Item
                    label="Product Name"

                    name="product_name"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                    initialValue={`${product_name}`}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Stock Left"
                    name="stock_left"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                    initialValue={`${stock_left}`}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                    initialValue={`${category}`}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{span:20, offset: 10 }}>
                
                    <Button style={{ margin : 10}} type="primary" htmlType="submit">
                        UPDATE PRODUCT
                    </Button>
                    <Link style={{ margin : 10}} to="/"><button type="button"> Back to Dashboard </button></Link>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateProduct;