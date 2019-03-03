import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  margin: auto;
  display: flex;
  height: 15vh;
  align-items: center;
  background-color: red;
`;
const Line = styled.section`
  width: 100%;

  display: flex;
  background-color: lightgray;
  height: 1px;
`;
const BottomBorder = styled.section`
  width: 100%;

  display: flex;
  background-color: red;
  height: 8vh;
`;
const LeftBottom = styled.section`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: stretch;
  align-content: stretch;
`;
const RightBottom = styled.section`
  width: 50%;
  display: flex;
  height: 100%;
`;
export default class Nav extends Component {
  render() {
    return (
      <div>
        <Wrapper />
        <Line />
        <BottomBorder>
          <LeftBottom>
            {/* <div>
              <div>Products</div>
              <div>Brands</div>
              <div>Deals</div>
              <div>Services</div>
            </div> */}
          </LeftBottom>
          <RightBottom>
            {" "}
            <div />
          </RightBottom>
        </BottomBorder>
        <Line />
      </div>
    );
  }
}
