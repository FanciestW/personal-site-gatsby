import React from "react";
import { Box, Flex, Text } from "rebass";

export default function Footer() {
  return (
    <Flex
      bg="primary"
      variant="flexMargins"
      alignItems="center"
      py={[2, 3, 5]}
      sx={{ display: "grid", gridGap: 4, gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))" }}>
      <Box mx="auto">Col 1</Box>
      <Box mx="auto">Col 2</Box>
    </Flex>
  );
}
