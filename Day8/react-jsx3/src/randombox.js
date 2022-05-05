let RandomBox =() => {

    let myArray = ['red', 'green', 'blue', 'purple','pink'];    
    let randomColor = myArray[Math.floor(Math.random() * myArray.length)];
    let randomFontSize = Math.floor((Math.random() * 20) + 20)

   return (
       <div  style={{display: 'inline-block',color: 'white',padding:'1rem',margin: '2rem',fontSize: `${randomFontSize}px`,backgroundColor:`${randomColor}`}}>
       <h2> Random Box</h2>
       </div>)
}


export default RandomBox;