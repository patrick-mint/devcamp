import React, { useState } from 'react';
import PictureCard from './pictureCard'
import './App.css';



function App() {
  let data = [
{id : 191,
  imgSrc : "https://cdn.pixabay.com/photo/2022/04/04/14/17/milk-7111433_1280.jpg",
  createBy : "Mint",
  likeCount : 3200,
  commentCount : 23,
},
{id : 192,
  imgSrc : "https://cdn.pixabay.com/photo/2022/03/28/18/41/spring-7098130_1280.jpg",
  createBy : "Elon Musk",
  likeCount : 24212,
  commentCount : 252,
},
{id : 199,
  imgSrc : "https://cdn.pixabay.com/photo/2020/03/18/08/06/envelope-4943161_1280.jpg",
  createBy : "Johnny Depp",
  likeCount : 1234000,
  commentCount : 864,
},
{id : 202,
  imgSrc : "https://cdn.pixabay.com/photo/2021/06/14/15/19/kid-6336155_1280.jpg",
  createBy : "Amber Heard",
  likeCount : 0,
  commentCount : 23498,
},
  ]
   return (
   <>

   <div className="container flex-container card" >
  {data.map(x => (
<PictureCard
id={x.id}
imgSrc = {<img className="img_Content" style={{width: '100%'}} src={x.imgSrc}/>}
createBy = {x.createBy}
likeCount = {x.likeCount}
commentCount = {x.commentCount}
/>
  ))}
  </div>

  </>
   );
   
}


export default App;