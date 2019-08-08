import Head from "next/head";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import Layout from "../components/Layout";

const StyledAboutMe = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
  padding-top: 10rem;
  max-width: 60rem;
  margin: 0 auto;
  text-align: justify;

  p {
    font-size: 2.2rem;
    line-height: 3rem;
    color: #444;
  }

  a {
    text-decoration: none;
    border-top: solid 2px red;
  }
`;

const StyledAvatar = styled.img`
  border-radius: ${props => (props.width ? props.width : "200px")};
  width: ${props => (props.width ? props.width : "200px")};
  margin: 0 auto;
  display: block;
`;

export default () => (
  <Layout>
    <Head>
      <title>About Bagus Rianto</title>
    </Head>
    <StyledAboutMe>
      <Flex>
        <Box width={1} px={2}>
          <StyledAvatar
            src="/static/images/~bagus.jpg"
            alt="Bagus Rianto"
          />
          <p>
            Hi, My name is{" "}
            <a href="http://twitter.com/bguzryanto">Bagus Rianto</a>, I known as
            bguzryanto in the web. The parameter changes affect the generated
            text in real-time; a feature I have seen other text generators use.
            The "slider" for the element count didn't work as I expected and it
            took a little playing with to understand how to change the counts.
            The actual value in the middle of the bar does not move - you simply
            click higher or lower to make that number stick. Even more
            interesting is the fact that rolling the mouse over the bar changes
            the generated text in real time. I find this somewhat clever, but
            maybe too clever for its own good.
          </p>
        </Box>
      </Flex>
    </StyledAboutMe>
  </Layout>
);
