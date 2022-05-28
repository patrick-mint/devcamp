import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
// need to install jwt-decode    
import jwt_decode from 'jwt-decode';

export default function Profile() {
 let navigate = useNavigate();
 const [cart, setCart] = useState([]);

 const [username, setUsername] = useState([]);

 useEffect(() => {
   const token = localStorage.getItem('token');
//    decode token
   var decoded = jwt_decode(token);
   console.log(decoded);
//    call username by using useState 
   const username = decoded.username; 
   setUsername(username);  

   if (token) {
     axios
       .get('/api/users/mycart', {
         headers: {
           Authorization: `Bearer ${token}`, // JWT in Authorization header
         },
       })
       .then((res) => {
         setCart(res.data);
       })
       .catch((err) => {
         if (err.response.status === 401) {
           // token expired - remove and redirect to login
           localStorage.removeItem('token');
           navigate('/login');
         }
       });
   } else {
     navigate('/login');
   }

 }, []);

 return (
   <>
     <h2 className = "middle">Hey {username}, welcome to your page!</h2>
     <h3 className = "space">My shopping cart items</h3>
     <ul className = "space">{cart && cart.map((c) => <li>{c.item}</li>)}</ul>
   </>
 );
}


