import React from "react";
import Head from "next/head";
import Layout from "./../components/Layout";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import { Flex, Box } from "grid-styled";

const StyledAvatar = styled.img`
  width: ${props => (props.width ? props.width : "200px")};
  margin-top: 1.6rem;
  margin-bottom: 3rem;
  display: block;

  ${breakpoint("desktop")`
    margin-top: 0;
  `}
`;

export default () => (
  <Layout>
    <Head>
      <title>Bagus Rianto</title>
    </Head>
    <Flex>
      <Box width={1} px={2}>
        <main>
          <StyledAvatar src="/static/images/~bagus.jpg" alt="Bagus Rianto" />
          <p>
            <strong>Hi</strong>, My name is Bagus Rianto
          </p>
          <p>
            I am software engineer at Grab based in 🇸🇬Singapore. I working on
            things that interest me the most, currently it's crossing across
            frontend development, high-scale distributed system, and cloud
            infrastructure.
          </p>
          <p>
            My daily activities consist of:
            <ul>
              <li>Building highly-scale distributed system using Go</li>
              <li>Building consumer and business facing frontend app</li>
              <li>
                Maintain infrastructure, systems operations and reliability
              </li>
              <li>
                Adhoc things that require skills on cli, code navigation,
                ripgrep, etc
              </li>
            </ul>
          </p>
          <p>
            To make my brain busy I keep in touch with machine learning field,
            linux development and play some MMORPG game. There are more things I
            want to say, how about follow me + send me a tweet at{" "}
            <a href="http://twitter.com/bguzryanto" target="_blank">
              @bguzryanto
            </a>
            .
          </p>
        </main>
      </Box>
    </Flex>
  </Layout>
);
