import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import Layout from "../components/Layout";

const ArticleList = styled.ul`
  li {
    font-size: 1.6rem;
  }
`


export default () => (
  <Layout>
    <Head>
      <title>~/bagus.rianto/blog</title>
    </Head>
    <Flex>
      <Box width={1} px={2}>
        <main>
          <h1>Thoughts</h1>
          <ArticleList>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ArticleList>
        </main>
      </Box>
    </Flex>
  </Layout>
);
