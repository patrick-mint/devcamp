import React from 'react'
import { useNavigate, useParams} from 'react-router-dom';

function ProductDetail() {
 
  let param = useParams();
  let navigate = useNavigate();
  return (
    
    <div>
      <h1 >Product Detail</h1>
    
    <>
  <p>You open product {param.id}</p></>
      <p><button
      onClick={() => {
        navigate("/Shop");
      }}>
        {''}
        Back to Shop</button></p>
      </div>
  )
}

export default ProductDetail;