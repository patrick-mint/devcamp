import React, { useState } from "react";
import "./App.css";


function App() {
  const [member, setMember] = useState({
    name: "John",
    age: 30,
    skills: [
      { id: 1, name: "React" },
      { id: 2, name: "NodeJS" },
    ],
  });

  const onChangeAge = () => {
    let newValue = { ...member };
    newValue.age = "สามสิบปี";
    setMember(newValue);
  };

  const onChangeSkills = () => {
    let newValue = { ...member };
    newValue.skills[0].name= "Javascript";
    newValue.skills[1].name= "React";
    setMember(newValue);
  };

  return (
    <>
      <p>Name : {member.name}</p>
      <p>Age : {member.age}</p>
      <ul>
        {member.skills &&
          member.skills.map((skill) => <li key={skill.id}>{skill.name}</li>)}
      </ul>
      <button onClick={onChangeAge}>change Age</button>
      <button onClick={onChangeSkills}>change Skills</button>
    </>
  );
}


export default App;

// let newSkills = [ "a","b","c","d"]
//     newSkills.forEach(x => {
//      newValue.skills.push({id:member.skills.length+1,name:x}) 
//     })