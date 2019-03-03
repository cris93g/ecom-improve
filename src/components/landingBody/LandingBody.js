import React, { Component } from "react";
import styled from "styled-components";

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
  display: flex;
  width: 33%;
  border-right: 1px solid lightgray;
`;
const MiddleTop = styled.section`
  display: flex;
  width: 33%;
  border-right: 1px solid lightgray;
`;
const RightTop = styled.section`
  display: flex;
  width: 33%;
`;

const BottomThree = styled.section`
  display: flex;
  height: 50%;
`;
const LeftBottom = styled.section`
  display: flex;
  width: 33%;
  border-right: 1px solid lightgray;
`;
const MiddleBottom = styled.section`
  display: flex;
  width: 33%;
  border-right: 1px solid lightgray;
`;
const RightBottom = styled.section`
  display: flex;
  width: 33%;
`;
export default class LandingBody extends Component {
  render() {
    return (
      <div>
        <div>
          {" "}
          <TopBord> Our Featured offers</TopBord>
          <BodyWrapper>
            <TopThree>
              <LeftTop />
              <MiddleTop />
              <RightTop />
            </TopThree>

            <BottomThree>
              <LeftBottom />
              <MiddleBottom />
              <RightBottom />
            </BottomThree>
          </BodyWrapper>
        </div>
      </div>
    );
  }
}
