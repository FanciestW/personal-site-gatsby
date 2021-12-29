import React from "react";
import { Box, Flex, Link, Text } from "rebass";
import { Button } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust, faDownload } from "@fortawesome/free-solid-svg-icons";
import Typist from "react-typist";
import ReactTooltip from "react-tooltip";
import "react-typist/dist/Typist.css";

export default function Header() {
  return (
    <Flex bg="primary" variant="flexMargins" alignItems="center">
      <ReactTooltip place="bottom" effect="solid" />
      <Text variant="primary" p={3} fontSize={[3, 4]} fontWeight="bold">
        <Typist cursor={{ blink: true, element: "_" }}>
          {"> Hello World!"}
          <Typist.Backspace count={7} delay={2000} />
          {", I'm William!"}
        </Typist>
      </Text>
      <Box mx="auto" />
      <Box px={3}>
        <Link href="https://drive.google.com/uc?export=download&id=15MhjIAEKGBNL76SZ106hSpkbfiu7pJ4F" target="_blank">
          <Button variant="circleIcon" data-tip="Download Resume">
            <FontAwesomeIcon size="lg" icon={faDownload} />
          </Button>
        </Link>
      </Box>
      <Box px={3}>
        <Button variant="circleIcon" data-tip="Theme">
          <FontAwesomeIcon size="lg" icon={faAdjust} />
        </Button>
      </Box>
    </Flex>
  );
}
