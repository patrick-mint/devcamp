import "./App.css";
 // eslint-disable-next-line 
import { useState, useRef, useEffect } from "react";

function Form(props) {
  let firstname = useRef();
  let lastname = useRef();
  let gender = useRef();

  const submitForm = () => {
    // console.log(firstname.current.value)
    // console.log(lastname.current.value)
    // console.log(gender.current.value)

    props.getValue({
      name: firstname.current.value,
      lastname: lastname.current.value,
      gender: gender.current.value,
    });
  };

  return (
    <>
      <h1> Form List</h1>
      <input type="text" ref={firstname} />
      <input type="text" ref={lastname} />

      <select ref={gender}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="NA">NA</option>
      </select>

      <input type="button" value="submit" onClick={submitForm} />
    </>
  );
}

function App() {
  //useState
  const [MaleList, setMaleList] = useState([]);
  const [FemaleList, setFemaleList] = useState([]);
  const [NaList, setNaList] = useState([]);

  //getValue
  const getValue = (value) => {
    if (value.gender === "Male") {
      return setMaleList([...MaleList, value]);
    } else if (value.gender === "Female") {
      return setFemaleList([...FemaleList, value]);
    } else {
      return setNaList([...NaList, value])
    }
  };
  return (
    <>
      <Form getValue={getValue} />
      <hr />
      <h3>Male List</h3>
      <p>{JSON.stringify(MaleList)}</p>
      <p>{MaleList.length}</p>
      <h3>Female List</h3>
      <p>{JSON.stringify(FemaleList)}</p>
      <p>{FemaleList.length}</p>
      <h3>NA List</h3>
      <p>{JSON.stringify(NaList)}</p> 
      <p>{NaList.length}</p>
    </>
  );
}

export default App;
