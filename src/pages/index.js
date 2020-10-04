import React from "react"
import { Box, Flex, Text } from "rebass";
import Header from "../components/header";

import "../styles/index.scss";

export default function Home() {
  return (
    <Flex flexDirection='column' style={{height: '100vh'}}>
      <Box>
        <Header />
      </Box>
      <Flex flexGrow={1} px={6} style={{backgroundColor: '#272727'}}>
        <Box p={3} style={{height: '100%'}}>
          <Text>Hello World!</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
