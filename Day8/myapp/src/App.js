import logo from './logo.svg';
import './App.css';
import React from 'react';

class Hello extends React.Component {
  render() {
    const people = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Somchai'
  },
  {
    id: 3,
    name: 'Derp'
  }
]
    const msgs = people.map(person =>
      <p key={person.id}> Hello {person.name}</p>
    )
    return <div>{msgs}</div>
  }
}


function App() {
  return (
    <div className="App">
      <Hello/>
    </div>
  );
}




export default App;
