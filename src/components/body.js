import React from "react";
import { Box, Flex, Text } from "rebass";

export default function Body(props) {
  return (
    <Flex flexGrow={1} px={[0, 6]} style={{ backgroundColor: "#272727" }}>
      <Box p={3} style={{ height: "100%", width: "100%", backgroundColor: "#0000002A" }}>
        <Text>Hello World!</Text>
      </Box>
    </Flex>
  );
}
