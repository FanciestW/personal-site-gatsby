import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Box, Flex, Text } from "rebass";
import { useMediaQuery } from "react-responsive";

export default function EducationItem(props) {
  const isPhone = useMediaQuery({ maxDeviceWidth: 650 });
  const startDate = moment(props.startDate, "YYYY-MM-DD");
  const endDate = moment(props.endDate, "YYYY-MM-DD");
  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={isPhone ? "column" : "row"}
        justifyContent="flex-start"
        alignItems={isPhone ? "flex-start" : "flex-end"}>
        <Text variant="sectionItemTitle">{props.institution}</Text>
        {!isPhone && (
          <Text variant="sectionItemTitle" px={(1, 2)}>
            {"-"}
          </Text>
        )}
        <Text variant="sectionItemTitle" fontWeight="normal">
          <i>{props.studyType}</i>
        </Text>
      </Flex>
      <Box>
        <Text variant="sectionItemTitle" fontWeight="normal">
          <i>{props.area}</i>
        </Text>
      </Box>
      <Box pt={1}>
        <Text>{`${startDate.format("MMM YYYY")} - ${endDate.isValid() ? endDate.format("MMM YYYY") : "Present"}`}</Text>
      </Box>
      <Box pt={(1, 2)}>
        <Text>{props.summary}</Text>
      </Box>
    </Flex>
  );
}

EducationItem.propTypes = {
  institution: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  studyType: PropTypes.string.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  gpa: PropTypes.string,
  showGpa: PropTypes.bool,
};
