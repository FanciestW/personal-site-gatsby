import React from "react";
import { Box, Flex, Text } from "rebass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'

import "../styles/header.scss";

export default function Header(props) {
  return (
    <Flex px={6} color="white" bg="black" alignItems="center">
      <Text p={3} fontWeight="bold">
        <Typist cursor={{blink:true, element:'_'}}>
          {'> Hello World!'}
          <Typist.Backspace count={7} delay={2000} />
          {', I\'m William!'}
        </Typist>
      </Text>
      <Box mx="auto" />
      <FontAwesomeIcon icon={faAdjust} />
    </Flex>
  );
}
