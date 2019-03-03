import React, { Component } from "react";
import styled from "styled-components";
const BottomBorder = styled.section`
  width: 100%;
  margin-top: 10vh;
  display: flex;
  background-color: red;
  height: 8vh;
`;
const FootWrapper = styled.section`
  display: flex;

  margin: auto;
  justify-content: space-between;
`;
export default class Footer extends Component {
  render() {
    return (
      <div>
        <BottomBorder />
        <FootWrapper>
          <div>
            Account info
            <div>View Your Order History </div>
            <div>Manage Your Account </div>
          </div>

          <div>
            Company Info
            <div>Careers</div>
            <div>Contact us</div>
          </div>
          <div>
            Privacy, Security & Legal
            <div>Privacy</div>
          </div>
        </FootWrapper>
      </div>
    );
  }
}
