import React from "react"
import { Box, Flex, Text } from "rebass";
import Header from "../components/header";

import "../styles/index.scss";

export default function Home() {
  return (
    <Flex color="white" bg="black" flexDirection='column' style={{height: '100vh'}}>
      <Box>
        <Header />
      </Box>
      <Flex flexGrow={1} px={[1,6]} style={{backgroundColor: '#272727'}}>
        <Box p={3} style={{height: '100%', width: '100%', backgroundColor: '#0000002A'}}>
          <Text>Hello World!</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
