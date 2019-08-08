import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

const StyledAboutMe = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
  margin-top: 7.5rem;
  margin-left: 7.5rem;
  max-width: 70rem;
  text-align: justify;
  font-family: "Roboto Mono", monospace;

  p {
    font-size: 1.6rem;
    line-height: 2.9rem;
    color: #444;
    text-align: justify;
  }

  a {
    text-decoration: none;
  }
`;

const StyledAvatar = styled.img`
  width: ${props => (props.width ? props.width : "200px")};
  margin-bottom: 5rem;
  display: block;
`;

export default () => (
  <React.Fragment>
    <Head>
      <title>~bagus: Bagus Rianto</title>
    </Head>
    <StyledAboutMe>
      <Flex>
        <Box width={1} px={2}>
          <StyledAvatar src="/static/images/~bagus.jpg" alt="Bagus Rianto" />
          <p>
            <strong>Hi</strong>, My name is Bagus Rianto
          </p>
          <p>
            I am software engineer at Grab based in 🇸🇬Singapore. I working on
            things that interest me the most, currently it's crossing across
            frontend development, high scale-distributed system, and cloud
            infrastructure. To make my brain busy I keep in touch with machine
            learning field, linux development and play some MMORPG game.
          </p>
          <p>
            My daily activities consist of:
            <ul>
              <li>Building highly-scalable distributed system using Go</li>
              <li>Building consumer and business facing frontend app</li>
              <li>
                Maintain infrastructure, systems operations and reliability
              </li>
              <li>
                Adhoc things that require skills on cli, code
                navigation, ripgrep, etc
              </li>
            </ul>
          </p>
          <p>
            There are more things I want to say, how about follow me + send me a
            tweet at{" "}
            <a href="http://twitter.com/bguzryanto" target="_blank">
              @bguzryanto
            </a>
            .
          </p>
        </Box>
      </Flex>
    </StyledAboutMe>
  </React.Fragment>
);
