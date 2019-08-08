import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import colors from "../colors";

const Nav = styled.nav`
  display: none;
  overflow: hidden;
  position: absolute;
  right: 2rem;
  top: 1rem;

  ${breakpoint("desktop")`
    display: block;
  `};
`;

const NavItems = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  float: left;
`;

const NavItemLink = styled.a`
  color: ${props => (props.isActive ? colors.tertiary : "#444")};
  display: block;
  font-family: "europa", sans-serif;
  font-size: 1.65rem;
  font-weight: 700;
  letter-spacing: 0.4rem;
  margin-left: 3rem;
  text-decoration: none;
  text-transform: uppercase;

  &:active {
    color: red;
  }
`;

type propsType = {
  router: {
    pathname: string;
  };
};
class DesktopMenu extends Component<propsType, {}> {
  render() {
    const {
      router: { pathname }
    } = this.props;

    return (
      <Nav>
        <NavItems>
          <NavItem>
            <Link prefetch href="/" passHref>
              <NavItemLink isActive={pathname === "/"}>Home</NavItemLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link prefetch href="/about" passHref>
              <NavItemLink isActive={pathname === "/about"}>About</NavItemLink>
            </Link>
          </NavItem>
          <NavItem>
            <NavItemLink
              href="https://standardresume.co/bagusrianto"
              target="_blank"
            >
              Resume
            </NavItemLink>
          </NavItem>
        </NavItems>
      </Nav>
    );
  }
}

export default withRouter(({ router }) => (
  <DesktopMenu router={{ pathname: router.pathname }} />
));
