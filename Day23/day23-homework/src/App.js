import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = { name: "Unknown User" };
  }
  componentDidMount() {
    const name = prompt("Type your name !");
    this.setState({ name: name });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name && nextState.name !== " ") {
      if (nextState.name === this.state.name) {
        alert("คุณกรอกชื่อซ้ำ");
      } else {
        let result = document.getElementById("result");
        result.innerHTML += `<li> Previous Name : ${
          this.state.name
        } <br/> New Name : ${nextState.name} <br/> date : ${Date()} </li>`;

        return true;
      }
    } else {
      this.setState({ name: "Unknown User" });
      return false;
    }
    // return nextState.name !== " " && nextState.name !== "" ? true : false
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>{this.state.name}</h1>
        <input type={"text"} style={{ width: "15%" }} id={"input"} />
        <button
          onClick={() => {
            const value = document.getElementById("input").value;
            this.setState({ name: value });
          }}
          style={{ width: "15%" }}
        >
          Change Your Name
        </button>
        <ul id="result"></ul>
      </div>
    );
  }
}
