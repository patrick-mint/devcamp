import React from 'react';
import './App.css';

let PictureCardComponent = () => {
    const Content_data = [
        {
            id: 1,
            name: 'Picture 1',
            img: "https://cdn.pixabay.com/photo/2022/04/04/14/17/milk-7111433_1280.jpg",
        },
        {
            id: 2,
            name: 'Picture 2',
            img: "https://cdn.pixabay.com/photo/2022/03/28/18/41/spring-7098130_1280.jpg",
        },
        {
            id: 3,
            name: 'Picture 3',
            img: "https://cdn.pixabay.com/photo/2020/03/18/08/06/envelope-4943161_1280.jpg"
        },
        {
            id: 4,
            name: 'Picture 4',
            img: "https://cdn.pixabay.com/photo/2021/06/14/15/19/kid-6336155_1280.jpg",
        },
        {
            id: 5,
            name: 'Picture 5',
            img: "https://cdn.pixabay.com/photo/2021/11/13/19/27/architecture-6792168_1280.jpg",
        },
        {
            id: 6,
            name: 'Picture 6',
            img: "https://cdn.pixabay.com/photo/2022/03/28/18/41/coffee-7098126_1280.jpg",
        },
        {
            id: 7,
            name: 'Picture 7',
            img: "https://cdn.pixabay.com/photo/2022/04/13/13/56/old-building-7130386_1280.jpg"
        },
        {
            id: 8,
            name: 'Picture 8',
            img: "https://cdn.pixabay.com/photo/2017/08/02/01/02/tulip-2569334_1280.jpg",
        },
      ];
    
    
    
    const GetContent = Content_data.map((x,i) => {
    
        return (
          
            <div className="card" key={`picture${i}`}>
              
                    <img className="img_Content" style={{width: '100%'}} src={x.img} alt={x.name} />
                    <h3>{x.name}</h3>
                    <p>130 likes</p>
                    <p>10 comments</p>
                    </div>
          
        );
    });


    return <div className="container flex-container">{GetContent}</div>
}



export default PictureCardComponent;

