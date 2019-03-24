import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Tvs from "./components/Tvs/Tvs";
import LandingBody from "./components/landingBody/LandingBody";
import { connect } from "react-redux";
export default (
	<Switch>
		<Route exact path="/" component={LandingBody} />{" "}
		<Route path="/Tvs" component={Tvs} />{" "}
		<Route
			exact
			path="/product/:id"
			component={connect(state => state)(props => {
				let {
					products,
					match: {
						params: { id }
					}
				} = props;
				if (products.length) {
					return (
						<Products product={products.find(c => +c.id === +id)} {...props} />
					);
				}
			})}
		/>
	</Switch>
);
