import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Box, Flex, Text } from "rebass";

export default function ExperienceItem(props) {
  const startDate = moment(props.startDate, "YYYY-MM-DD");
  const endDate = moment(props.endDate, "YYYY-MM-DD");
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
        <Text>{`${startDate.format("MMM YYYY")} - ${endDate.isValid() ? endDate.format("MMM YYYY") : "Present"}`}</Text>
      </Box>
      <Box>
        <Text>{props.summary}</Text>
      </Box>
    </Flex>
  );
}

ExperienceItem.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  summary: PropTypes.string,
};
