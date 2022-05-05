import "./App.css";
import { useState } from "react";

function App() {
  let i = 0;
  let [toDoList, setToDoList] = useState([{ date: Date(), msg: "Don't you have something To Do!" }]);


  function pressEnter(e) {
    let message = e.target.value;

    if (e.key === "Enter" && message !== "") {
      let detail = [...toDoList];
      detail.push({ date: Date(), msg: message });
     
      setToDoList(detail);
      e.target.value = "";

      // data.push({ date: Date(), msg: message });
    } else if (e.key === "Enter" && message === "") {
      e.target.value = "";
      alert("NO ToDo List as of now");
    }
  }

  function deleteList(x) {
    let ans = toDoList.filter((y) => y.msg !== x.msg);
    setToDoList(ans);
  }

  return (
    <div>
      <div className="mb-3">
        {toDoList.map((x) => (
          <div className="card">
            <p>{x.date}</p>
            <p>{x.msg}
            <button className = "space btn-danger" onClick={() => deleteList(x)}>DELETE</button></p>
          </div>
        ))}
      </div>

      <input className="text" type="text" placeholder="Put your ToDos and ENTER NOW!" onKeyDown={pressEnter}></input>
    </div>
  );
}

export default App;
