import React, { Component } from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import MenuIcon from "./Navbar/MenuIcon";
import DesktopMenu from "./Navbar/DesktopMenu";

const HeaderText = styled.h1`
  background: -webkit-linear-gradient(right, #293d5b, #83a9c2);
  display: block;
  font-family: "europa", sans-serif;
  font-size: 3.25rem;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${breakpoint("tablet")`
    font-size: 7rem;
  `} ${breakpoint("desktop")`
    font-size: 14rem;
  `};
`;

const HeaderWrapper = styled.div`
  padding: 1.6rem;
  background-color: #fff;

  ${breakpoint("desktop")`
    margin-left: 1rem
  `};
`;

class Header extends Component {
  render() {
    const { open = false, onMenuClick = () => {} } = this.props;

    return (
      <HeaderWrapper>
        <HeaderText>Hello</HeaderText>
        <HeaderText>I am</HeaderText>
        <HeaderText>Bagus Rianto</HeaderText>
      </HeaderWrapper>
    );
  }
}

export default Header;
