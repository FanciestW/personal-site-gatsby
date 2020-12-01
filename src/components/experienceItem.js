import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Box, Flex, Text } from "rebass";
import { useMediaQuery } from "react-responsive";

export default function ExperienceItem(props) {
  const isPhone = useMediaQuery({ maxDeviceWidth: 650 });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const startDate = moment(props.startDate, "YYYY-MM-DD");
  const endDate = moment(props.endDate, "YYYY-MM-DD");
  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={isPhone ? "column" : "row"}
        justifyContent="flex-start"
        alignItems={isPhone ? "flex-start" : "flex-end"}>
        <Text variant="experienceTitle">{props.title}</Text>
        {!isPhone && (
          <Text variant="experienceTitle" px={(1, 2)}>
            {"-"}
          </Text>
        )}
        <Text variant="experienceTitle" fontWeight="normal">
          <i>{props.company}</i>
        </Text>
      </Flex>
      <Box pt={1}>
        <Text>{`${startDate.format("MMM YYYY")} - ${endDate.isValid() ? endDate.format("MMM YYYY") : "Present"}`}</Text>
      </Box>
      <Box pt={(1, 2)}>
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
