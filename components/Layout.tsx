import React, { Component } from "react";
import styled from "styled-components";

import DesktopMenu from "./Navbar/DesktopMenu";
import MenuIcon from "./Navbar/MenuIcon";
import MobileMenu from "./Navbar/MobileMenu";

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: #fff;
  transition: transform 0.2s ease-in-out;

  transform: ${props =>
    props.open ? "translate3d(-10rem, 0, 0)" : "translate3d(0, 0, 0)"};
`;

type stateType = {
  open: boolean;
};
class Layout extends Component<{}, stateType> {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <MobileMenu open={open} />
        <Wrapper open={open}>
          <MenuIcon open={open} onMenuClick={this.toggleOpen} />
          <DesktopMenu />
        </Wrapper>

        {this.props.children || ""}
      </div>
    );
  }
}

export default Layout;
