import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import { Descriptions, Button } from "antd";


const ViewProduct = () => {
    const product = useSelector((state) => state.product);
    const navigate = useNavigate();
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        setData(product.productList[Number.parseInt(id)])
        // console.log(product.productList[Number.parseInt(id)]);
    }, [product.productList]);

    const item = product.productList[Number.parseInt(id)];
    const product_id = item.id;
    const product_name = item.product_name;
    const stock_left = item.stock_left;
    const category = item.category;

  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Descriptions title="View Product" layout="vertical" bordered>
        {/* <Descriptions.Item label="Photo :">
          <img
            style={{ width: "200px" }}
            src={`${API_URL}/static/upload-files/${productList.productData[index].photo}`}
          />
        </Descriptions.Item> */}
        <Descriptions.Item label="Product ID :">
          {product_id}
        </Descriptions.Item>
        <Descriptions.Item label="Product Name :">
          {product_name}
        </Descriptions.Item>
        <Descriptions.Item label="Category :">
          {category}
        </Descriptions.Item>
        <Descriptions.Item label="Stock Left :">
          {stock_left}
        </Descriptions.Item>
      </Descriptions>
      <div>
        <Button type="primary" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default ViewProduct;