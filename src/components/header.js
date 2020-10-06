import React from "react";
import { Box, Button, Flex, Text } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

import "../styles/header.scss";

export default function Header() {
  return (
    <Flex bg="primary" variant="flexMargins" alignItems="center">
      <Text variant="primary" p={3} fontSize={4} fontWeight="bold">
        <Typist cursor={{ blink: true, element: "_" }}>
          {"> Hello World!"}
          <Typist.Backspace count={7} delay={2000} />
          {", I'm William!"}
        </Typist>
      </Text>
      <Box mx="auto" />
      <Box px={3}>
        <Button variant="circleIcon">
          <FontAwesomeIcon size='lg' icon={faAdjust} />
        </Button>
      </Box>
    </Flex>
  );
}
