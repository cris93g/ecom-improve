import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
// import Carous from "./components/carousel/Carous";
import LandingBody from "./components/landingBody/LandingBody";
import Footer from "./components/footer/Footer";
import AutoCompleteText from "./components/searchBar/SearchBar";
import { Provider } from "react-redux";
import store from "./redux/store";
import routes from "./routes";
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Nav />
					{/* <Carous /> */}
					{routes}
					<Footer />
				</div>
			</Provider>
		);
	}
}

export default App;
