import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(1);

  const onClickFunction = (e) => {
    setNumber(number +1);
  };

   return (
   <>
   <p>{number}</p>
    <input type= "button" value = "Click Me" onClick={onClickFunction} />
  </>
   )
}


export default App;