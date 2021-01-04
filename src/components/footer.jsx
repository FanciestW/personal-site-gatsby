import React from "react";
import { Box, Flex, Text, Link } from "rebass";

export default function Footer() {
  return (
    <Flex
      bg="primary"
      variant="flexMargins"
      alignItems="center"
      py={[2, 3]}
      sx={{ display: "grid", gridGap: 4, gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))" }}>
      <Box mx="auto">
        <Text fontSize={1}>
          Built with{" "}
          <Text display="inline" fontSize={2}>
            &#9829;
          </Text>{" "}
          by{" "}
          <Link variant="textLink" target="_blank" href="https://github.com/FanciestW">
            @FanciestW
          </Link>
        </Text>
      </Box>
    </Flex>
  );
}
