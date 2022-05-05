import React from 'react';

const onCopyFunc = (e) => {
  e.preventDefault();
  alert(`Don't Copy!`)
};

const onClickFunc = (e) => {
  alert (`Hello there!`);
}

const onKeyPressFunc = (e) => {
  console.log(e.key)
}   

const onChangeFunc = (e) => {
  console.log(e.target.value)
}   

function App (){
  return (
<>
<input type="text" onChange={onChangeFunc} />
<input type="text" onKeyPress={onKeyPressFunc} />
<input type = 'button' value = 'Alert'onClick={onClickFunc}/>
<p onCopy={onCopyFunc}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
</>

  )
}

export default App;