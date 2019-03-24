import React, { Component } from "react";
import styled from "styled-components";
import "./landingBody.css";
import { Link } from "react-router-dom";
import Carous from "../carousel/Carous";
const BodyWrapper = styled.section`
	height: 90vh;
	width: 80vw;

	margin: auto;
`;
const TopBord = styled.section`
	margin-top: 10vh;
	border-bottom: 1px solid lightgray;
	margin-bottom: 6vh;
`;

const TopThree = styled.section`
	display: flex;
	height: 50%;
	border-bottom: 1px solid lightgray;
`;
const LeftTop = styled.section`
	width: 33%;
	border-right: 1px solid lightgray;
`;
const MiddleTop = styled.section`
	width: 33%;

	border-right: 1px solid lightgray;
`;
const RightTop = styled.section`
	width: 33%;
`;

const BottomThree = styled.section`
	display: flex;
	height: 50%;
`;
const LeftBottom = styled.section`
	width: 33%;
	border-right: 1px solid lightgray;
`;
const MiddleBottom = styled.section`
	width: 33%;
	border-right: 1px solid lightgray;
`;
const RightBottom = styled.section`
	width: 33%;
`;
export default class LandingBody extends Component {
	render() {
		return (
			<div>
				<Carous />
				<div>
					{" "}
					<TopBord> Our Featured offers</TopBord>
					<BodyWrapper>
						<TopThree>
							<LeftTop>
								<Link to="/Tvs">
									<img
										src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/ghp-030318-promo-tvs_DER-66358.jpg"
										className="landingImages"
									/>
								</Link>
								<h4>4K TVs</h4>
								<p>Great deals on 4k tv's</p>
							</LeftTop>
							<MiddleTop>
								{" "}
								<img
									src="https://cdn.macrumors.com/article-new/2018/09/littleiphonexr.jpg?retina"
									className="landingImages2"
								/>
								<h4>Check Out the new Iphonexr</h4>
								{/* <p>Great deals on 4k tv's</p> */}
							</MiddleTop>
							<RightTop>
								<img
									src="https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/4-door-french-door/pdp/rf28jbedbsr/gallery/01_Refrigerator_French-Door_RF28JBEDBSR_Front_Closed_Silver.jpg?$default-jpg$"
									className="landingImages3"
								/>
								<h4>Check Out the new Iphonexr</h4>
								{/* <p>Great deals on 4k tv's</p> */}
							</RightTop>
						</TopThree>

						<BottomThree>
							<LeftBottom>
								<img
									src="https://cdn.gamerant.com/wp-content/uploads/switch-xbox-one-ps4.jpg.optimal.jpg"
									className="landingImages4"
								/>
								<h4>Check Out the new Iphonexr</h4>
								{/* <p>Great deals on 4k tv's</p> */}
							</LeftBottom>
							<MiddleBottom>
								<img
									src="https://static.bhphoto.com/images/images500x500/1539632856000_1437068.jpg"
									className="landingImages5"
								/>
								<h4>Check Out the new Iphonexr</h4>
								{/* <p>Great deals on 4k tv's</p> */}
							</MiddleBottom>
							<RightBottom>
								<img
									src="https://media.kohlsimg.com/is/image/kohls/2443766?wid=1000&hei=1000&op_sharpen=1"
									className="landingImages6"
								/>
								<h4>Check Out the new Iphonexr</h4>
								{/* <p>Great deals on 4k tv's</p> */}
							</RightBottom>
						</BottomThree>
					</BodyWrapper>
				</div>
			</div>
		);
	}
}
