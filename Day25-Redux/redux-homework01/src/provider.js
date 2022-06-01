import React, { useState, createContext, useContext, useRef } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setDefault } from "./calculateReducer";
import { changeName, changeLastname, changeAge } from "./profileReducer";
let ProfileContext = createContext();

function ProfileContextProvider(props) {
  const data = "TEST";
  let [firstname, setFirstName] = useState("Stephen");
  let [lastname, setLastname] = useState("Strange");
  let [age, setAge] = useState('45');
  let setName = (firstname, lastname, age) => {
    setFirstName(firstname);
    setLastname(lastname);
    setAge(age);
  };
  return (
    <ProfileContext.Provider value={{ data, firstname, lastname,age , setName }}>
      {props.children}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileContextProvider };
