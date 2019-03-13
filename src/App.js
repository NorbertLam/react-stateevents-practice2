import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer"

class App extends Component {
  render() {
    return (
      <div className="container">
        <BeyContainer />
        {/* <Favorites /> */}
      </div>
    );
  }
}

export default App;
