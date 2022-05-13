import React from 'react'
import { useNavigate, Link} from 'react-router-dom';

function Warehouse() {
  const warehouseList = [
    { id: 'Alpha', 
    warehouseName: 'Chicago', 
    latitude: 	41.881832, 
    longitude: -87.623177, 
    Tel : +11234567, 
    fax : +112345677 },
    { id: 'Bravo', 
    warehouseName: 'NewYork',
    latitude: 	41.881832, 
    longitude: -87.623177, 
    Tel : +11234567, 
    fax : +112345677 },
    { id: 'Charlie', 
    warehouseName: 'LosAngeles',
    latitude: 	41.881832, 
    longitude: -87.623177, 
    Tel : +11234567, 
    fax : +112345677 },
    { id: 'Delta', 
    warehouseName: 'Boston',
    latitude: 	41.881832, 
    longitude: -87.623177, 
    Tel : +11234567, 
    fax : +112345677 },
    { id: 'Echo', 
    warehouseName: 'Boston',
    latitude: 	41.881832, 
    longitude: -87.623177, 
    Tel : +11234567, 
    fax : +112345677 }
  ] 
 
  let navigate = useNavigate();

  return (
    <div style = {{margin : "10px"}}>
    <h1>Warehouse Location</h1>
    <><h2>Our Warehouse</h2><ul>
    {warehouseList.map(x => <li><Link to={`${x.id}/${x.warehouseName}/${x.latitude}/${x.longitude}/${x.Tel}/${x.fax}`}> <p>{x.warehouseName}</p> </Link></li>)}
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

export default Warehouse;