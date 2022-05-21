import axios from 'axios';
import React, { useEffect } from "react";
import './App.css';

export default function App() {

  useEffect( ()=>{

    const get =  async ()=>{
        const response = await axios.get('api/users')
        const aUser = await response.data.data;
        let str = '';
        for (let i = 0; i < aUser.length; i++) {
            str += `
                <div class="col">
                    <span class='bold'>${aUser[i].first_name}</span><br>
                    ${aUser[i].email}<br>
                    <img src='${aUser[i].avatar}'>
                </div>
                `;
            console.log(str)
        }
        
        document.getElementById('content').innerHTML = str;
    }
    get()

},[])
return(
  <> 
  <div className="container">

<h1>Hello ReqRes user!</h1>

<div className="row" id="content"></div>

</div>

</>
)
}

