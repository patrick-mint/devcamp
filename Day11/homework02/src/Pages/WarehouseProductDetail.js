import React from 'react'
import { useNavigate, useParams} from 'react-router-dom';

function WarehouseProductDetail() {
 
  let param = useParams();
  let navigate = useNavigate();
  return (
    
    <div>
      <h1 >Warehouse Information</h1>
    <>
  <p>You entered to {param.id} warehouse</p></>

      <p><button
      onClick={() => {
        navigate("/warehouselocation");
      }}>
        {''}
        Back to Warehouse</button></p>
      </div>
  )
}

export default WarehouseProductDetail;