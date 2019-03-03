import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import Carous from "./components/carousel/Carous";
import LandingBody from "./components/landingBody/LandingBody";
import Footer from "./components/footer/Footer";
import AutoCompleteText from "./components/searchBar/AutoCompleteText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Carous />
        <LandingBody />
        <AutoCompleteText />
        <Footer />
      </div>
    );
  }
}

export default App;
