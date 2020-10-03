import React from "react";
import { Box, Flex, Link, Text } from "rebass";

import "../styles/header.scss";

export default function Header(props) {
  return (
    <Flex px={2} color="white" bg="black" alignItems="center">
      <Text p={2} fontWeight="bold">
        > Hello World
      </Text>
      <Box mx="auto" />
      <Link variant="nav" href="#!">
        Profile
      </Link>
    </Flex>
  );
}
