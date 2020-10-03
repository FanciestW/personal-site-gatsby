import React from "react";
import { Box, Flex, Link, Text } from "rebass";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'

import "../styles/header.scss";

export default function Header(props) {
  return (
    <Flex px={6} color="white" bg="black" alignItems="center">
      <Text p={3} fontWeight="bold">
        <Typist cursor={{blink:true}}>
          > Hello World
        </Typist>
      </Text>
      <Box mx="auto" />
    </Flex>
  );
}
