import React, { Component } from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const NavbarOutter = styled.a`
  color: #304999;
  cursor: pointer;
  height: 30px;
  position: fixed;
  right: 2.6rem;
  top: 2.6rem;
  transition: 0.5s ease-in-out;
  width: 30px;
`;

const Bricks = styled.span`
  background: #304999;
  display: block;
  height: 2px;
  left: 0;
  opacity: 1;
  position: absolute;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  width: 100%;

  ${breakpoint("desktop")`
    visibility: hidden;
    display:none;
  `};
`;

const Brick1 = styled(Bricks)`
  width: ${props => (props.isOpen ? "0%" : "")};

  top: ${props => (props.isOpen ? "10px" : "0px")};
  left: ${props => (props.isOpen ? "50%" : "")};
`;

const Brick2 = styled(Bricks)`
  top: 10px;
  transform: ${props => (props.isOpen ? "rotate(45deg)" : "")};
`;

const Brick3 = styled(Bricks)`
  top: 10px;
  transform: ${props => (props.isOpen ? "rotate(-45deg)" : "")};
`;

const Brick4 = styled(Bricks)`
  top: ${props => (props.isOpen ? "10px" : "20px")};
  width: ${props => (props.isOpen ? "0%" : "")};
  left: ${props => (props.isOpen ? "50%" : "")};
`;

type propsType = {
  open: boolean,
  onMenuClick: Function,
}
class MenuIcon extends Component<propsType, {}> {
  render() {
    const { open = false, onMenuClick = () => {} } = this.props;
    return (
      <NavbarOutter onClick={onMenuClick} isOpen={open}>
        <Brick1 isOpen={open} />
        <Brick2 isOpen={open} />
        <Brick3 isOpen={open} />
        <Brick4 isOpen={open} />
      </NavbarOutter>
    );
  }
}

export default MenuIcon;
