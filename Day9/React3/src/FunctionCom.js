import React, { useState } from 'react';

function App() {
  const [member, setMember] = useState({
    name: 'John',
    age: 30,
    skills: [{ id: 1, name: 'React' },
    { id: 2, name: 'NodeJS' }]
  });

  const onChangeAge = () => {
    setMember({ name: 'Mint', age: 20, skills: [{ id: 1, name: 'React' },
    { id: 2, name: 'Javascript' }]});
  }

   return <><p>Name : {member.name}</p>
    <p>Age : {member.age}</p>
    <ul>
      {member.skills && member.skills.map(skill =>
        <li key={skill.id}>{skill.name}</li>)}
    </ul>
    <button onClick={onChangeAge}>change age</button>
  </>
}


export default App;