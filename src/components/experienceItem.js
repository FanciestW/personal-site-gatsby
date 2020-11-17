import React, { useContext } from "react";
import { Box, Flex, Text } from "rebass";

export default function ExperienceItem(props) {
  return (
    <Flex flexDirection="column">
      <Box>{"Title"}</Box>
      <Box>{"Company"}</Box>
      <Box>{"Date"}</Box>
      <Box>{"Summary"}</Box>
    </Flex>
  );
}
