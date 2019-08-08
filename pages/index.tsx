import React, { Component } from "react";
import Head from "next/head";

import Layout from "./../components/Layout";
import Header from "../components/Header";

type stateType = {
  open: boolean;
};

class DefaultLayout extends Component<{}, stateType> {
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
      <Layout>
        <Head>
          <title>Bagus Rianto</title>
        </Head>
        <Header />
      </Layout>
    );
  }
}

export default DefaultLayout;
