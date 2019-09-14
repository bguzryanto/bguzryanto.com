import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledMenu = styled.ul`
  padding-inline-start: 1.5rem;
  margin-bottom: 4rem;

  li {
    font-weight: normal;
    font-size: 2rem;
    display: inline-block;
    margin-right: 20px;

    a:active {
      color: #000;
    }
  }
`;

export default class Menu extends Component {
  render() {
    return (
      <StyledMenu>
        <li>
          <Link>
            <a href="/">Home</a>
          </Link>
        </li>
        <li>
          <Link>
            <a href="/blog">Blog</a>
          </Link>
        </li>
        <li>
          <Link>
            <a href="/contact">Contact</a>
          </Link>
        </li>
      </StyledMenu>
    );
  }
}
