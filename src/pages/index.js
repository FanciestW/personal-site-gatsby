import React from "react";
import { Box, Flex } from "rebass";
import Body from "../components/body";
import Header from "../components/header";

import "../styles/index.scss";

export default function Home() {
  return (
    <Flex color="white" bg="black" flexDirection="column" style={{ height: "100vh" }}>
      <Header />
      <Body />
    </Flex>
  );
}
