import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import Carous from "./components/carousel/Carous";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Carous />
      </div>
    );
  }
}

export default App;
