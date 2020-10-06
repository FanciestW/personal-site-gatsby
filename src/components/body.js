import React from "react";
import { Box, Flex } from "rebass";
import HeadImage from "./headImage";

export default function Body() {
  return (
    <Flex flexGrow={1} variant="flexMargins" bg="background">
      <Box p={3} style={{ height: "100%", width: "100%", backgroundColor: "#0000002A" }}>
        <HeadImage />
      </Box>
    </Flex>
  );
}
