import React from 'react'
import { useNavigate } from 'react-router-dom';

function Stock() {
  const warehouseList = [
    {
      id: 'Alpha',
      warehouseName: 'Chicago',
      latitude: 41.881832,
      longitude: -87.623177,
      Tel: +11234567,
      fax: +112345677
    },
    {
      id: 'Bravo',
      warehouseName: 'NewYork',
      latitude: 41.881832,
      longitude: -87.623177,
      Tel: +11234567,
      fax: +112345677
    },
    {
      id: 'Charlie',
      warehouseName: 'LosAngeles',
      latitude: 41.881832,
      longitude: -87.623177,
      Tel: +11234567,
      fax: +112345677
    },
    {
      id: 'Delta',
      warehouseName: 'Boston',
      latitude: 41.881832,
      longitude: -87.623177,
      Tel: +11234567,
      fax: +112345677
    },
    {
      id: 'Echo',
      warehouseName: 'Oregon',
      latitude: 41.881832,
      longitude: -87.623177,
      Tel: +11234567,
      fax: +112345677
    }
  ]

  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  if (!token) {
  
  return (
    <>
    <h1>You are not authorized to view this page.</h1>
    <p><button
        onClick={() => {
          navigate("/");
        }}>
        {''}
        Back to Homepage</button></p>
        </>
  )} else {
    return(
      <div style={{ margin: "10px" }}>
      <h1>Stock Management</h1>
      <><h2>Our Warehouse</h2><ul>
        {warehouseList.map(x => <li><p>{x.warehouseName}</p></li>)}
      </ul></>
      <p><button
        onClick={() => {
          navigate("/");
        }}>
        {''}
        Back to Homepage</button></p>
    </div>
    )
  }
}

export default Stock;