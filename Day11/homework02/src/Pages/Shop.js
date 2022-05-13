import React from 'react'
import { useNavigate,Link} from 'react-router-dom';


function Shop() {
    const productList = [
      { id: '01', name: 'Wooden RoundTable' },
      { id: '02', name: 'Computer Desk' },
      { id: '03', name: 'Dining Table' },
      { id: '04', name: 'TV Table' },
      { id: '05', name: 'Desk Table' }
    ]
  let navigate = useNavigate();
  return (
    
    <div>
      <h1 >Shop Stock</h1>
      <><h2>Our Product</h2><ul>
    {productList.map(x => <li><Link to={`${x.id}`}>{x.name}</Link></li>)}
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

export default Shop