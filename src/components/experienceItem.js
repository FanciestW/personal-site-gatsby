import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Text } from "rebass";

export default function ExperienceItem(props) {
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="row" justifyContent="flex-start" alignItems="flex-end">
        <Text variant="experienceTitle">{props.title}</Text>
        <Text variant="experienceTitle" px={(1, 2)}>
          {"-"}
        </Text>
        <Text variant="experienceTitle" fontWeight="normal">
          <i>{props.company}</i>
        </Text>
      </Flex>
      <Box>
        <Text>{props.dates}</Text>
      </Box>
      <Box>
        <Text>{props.summary}</Text>
      </Box>
    </Flex>
  );
}

ExperienceItem.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  dates: PropTypes.string,
  summary: PropTypes.string,
};
