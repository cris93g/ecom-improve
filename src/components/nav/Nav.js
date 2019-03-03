import React, { Component } from "react";
import styled from "styled-components";
import SearchBar from "../searchBar/SearchBar";
import "./nav.css";
const Wrapper = styled.section`
  width: 100%;
  height: 15vh;
  background-color: red;
`;

const TopNav = styled.section`
  height: 50%;
`;
const BotNav = styled.section`
  height: 50%;
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

  color: white;
`;
const RightBottom = styled.section`
  width: 50%;
  display: flex;
  color: white;
`;
export default class Nav extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <TopNav />
          <BotNav>
            <SearchBar />
          </BotNav>
        </Wrapper>
        <Line />
        <BottomBorder>
          <LeftBottom>
            <h4 className="bannerHeadings">Products</h4>
            <h4 className="bannerHeadings">Brands</h4>
            <h4 className="bannerHeadings">Deals</h4>
            <h4 className="bannerHeadings">Services</h4>
          </LeftBottom>
          <RightBottom>
            {" "}
            <h4 className="bannerHeadings2">Account</h4>
            <h4 className="bannerHeadings2">Shopping History</h4>
          </RightBottom>
        </BottomBorder>
        <Line />
      </div>
    );
  }
}
