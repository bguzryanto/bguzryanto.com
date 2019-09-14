import React from 'react';
import Head from "next/link";
import { Flex, Box } from "grid-styled";

import Layout from './../components/Layout';

const contact = () => (
    <Layout>
        <Head>
            <title>/home/bagus.rianto/contact</title>
        </Head>
        <Flex>
            <Box width={1} px={2}>
                <p>
                    I can be contacted via email, twitter, dll
                </p>
            </Box>
        </Flex>

        
    </Layout>
)

export default contact;
