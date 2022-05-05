import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'John',
      age: 30,
      skills: [{ id: 1, name: 'React' },
      { id: 2, name: 'NodeJS' }]
    }
  }
  onChangeAge = () => {
    this.setState({ age: 200 });
  }

  onChangeName = () => {
    this.setState({ name: 'Magna'})
  }

  render() {
    return <><p>Name : {this.state.name}</p>
      <p>Age : {this.state.age}</p>
      <ul>
        {this.state.skills.map(skill =>
          <li key={skill.id}>{skill.name}</li>)}
      </ul>
      <button onClick={this.onChangeName}>change Name</button>
      <button onClick={this.onChangeAge}>change age</button>
      
    </>
  }
}



export default App;