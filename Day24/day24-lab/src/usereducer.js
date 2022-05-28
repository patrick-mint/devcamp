import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 }; 
      case 'multiple':
        return { count: state.count * 2 };
    case 'divided' :
        return { count: state.count / 2};
    
    }
  }
  function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
  
    return (
      <>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'multiple' })}>x</button>
        <button onClick={() => dispatch({ type: 'divided' })}>÷</button>
      </>
    );
  }
  function App() {
    return (
      <Counter />
    );
  }
  

export default App;
