import React, { Component } from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Menu = styled.div`
  position: fixed;
  height: 100%;
  background-color: #fff;
  right: 0;
  width: 10rem;
  display: block;

  ${breakpoint("desktop")`
    display: none;
  `};
`;

const StyledTitle = styled.h1`
  font-family: "europa", sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  color: #444;
`;

type propsType = {
  open: boolean;
};

class MobileMenu extends Component<propsType, {}> {
  render() {
    const { open = false } = this.props;
    return (
      <div>
        <Menu open={open}>
          <StyledTitle>Menu</StyledTitle>
        </Menu>
      </div>
    );
  }
}

export default MobileMenu;
