import React, { Component } from "react";
import { getTvs } from "../../redux/ducks/productReducer";
import { connect } from "react-redux";
import styled from "styled-components";
import "./Tvs.css";

// const BodyWrapper = styled.section`
// 	height: 60vh;
// 	width: 50vw;
// 	display: flex;
// 	margin: auto;
// 	border: 2px dotted black;
// 	max-width: 100%;
// `;

class Tvs extends Component {
	componentDidMount() {
		this.props.getTvs();
	}
	goToProduct = id => {
		this.props.history.push("/products/" + id);
	};
	render() {
		const { tvs } = this.props;
		console.log(tvs);
		const itemsDisplay = tvs.map(tv => {
			return (
				<div>
					<div
						className="cards"
						key={tv.item_id}
						onClick={() => this.goToProduct(tv.item_id)}
					>
						<img src={tv.picture} className="cardPictures" />

						<div className="cardWords">
							<h3>{tv.name}</h3>
							<h3>{tv.price}</h3>
						</div>
					</div>
				</div>
			);
		});
		return (
			<div className="tvdiv">
				{/* <BodyWrapper className=""> */}
				{itemsDisplay}
				{/* </BodyWrapper> */}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		tvs: state.tvs
	};
};
export default connect(
	mapStateToProps,
	{ getTvs }
)(Tvs);
