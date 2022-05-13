import React from 'react'
import { useNavigate, useParams} from 'react-router-dom';

function WarehouseProductDetail() {
 
  let param = useParams();
  let navigate = useNavigate();
  return (
    
    <div>
      <h1 >Warehouse Information</h1>
    <p>ID: {param.id}</p>
    <p>Name: {param.warehouseName}</p>
    <p>Latitude: {param.latitude}</p>
    <p>Longitude: {param.longitude}</p>
    <p>Tel: {param.Tel}</p>
    <p>Fax: {param.fax}</p>
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