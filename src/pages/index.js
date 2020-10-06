import React from "react";
import { ThemeProvider } from 'theme-ui';
import { Flex } from "rebass";
import Body from "../components/body";
import Header from "../components/header";

import theme from '../themes';
import "../styles/index.scss";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column" style={{ height: "100vh" }}>
        <Header />
        <Body />
      </Flex>
    </ThemeProvider>
  );
}
