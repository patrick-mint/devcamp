import { useState, useEffect } from "react";

function App() {
  const [header, setHeader] = useState("This is HEADER");
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("onetime useEffect");
  }, []);

  useEffect(() => {console.log("Multi Universe 01", counter1); console.log("Multi Universe 126 ", counter2) }, [counter1,counter2]);

  return (
    <>
      <h1>{header}</h1>
      <h3>count1 : {counter1} | count2 : {counter2} </h3>
      <input  
        type="button"
        value="ADD COUNT"
        onClick={() => setCounter1(counter1 + 1)}
      />
       <input
        type="button"
        value="ADD COUNT"
        onClick={() => setCounter2(counter2 + 1)}
      />
    </>
  );
}

export default App;
