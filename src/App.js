import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SlayContainer from "./SlayContainer"

class App extends Component {
  render() {
    return (
      <div className="container">
       <SlayContainer />
      </div>
    );
  }
}

export default App;
