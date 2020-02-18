import React, { Component, Fragment } from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import Menu from "./Menu";

const Layout = styled.div`
  max-width: 70rem;
  text-align: justify;
  font-size: 1.6rem;

  ${breakpoint("mobile")`
    margin: 2.5rem 2rem 0 2rem;
  `};

  ${breakpoint("desktop")`
    margin: 7.5rem 0 0 7.5rem;
  `};
  
  p {
    font-size: 2rem;
    line-height: 2.2rem;
    color: #000;
    text-align: justify;

    ${breakpoint("desktop")`
      font-size: 1.6rem;
      line-height: 2.9rem;
    `}

    strong {
      color: rgb(220, 40, 40);
    }
  }

  ul li {
    font-weight: normal;

    ${breakpoint("desktop")`
      font-size: 1.6rem;
      line-height: 2.9rem;
    `}
  }

  a {
    text-decoration: underline;
    color: rgb(220, 40, 40);
  }

  @media (prefers-color-scheme: dark) {
    p {
      color: #ddd;
    }

    ul li a:active {
      color: #fff;
    }
  }
`;

export default ({ children }) => (
    <Layout>
        <Menu />
        {children}
    </Layout>
)
