import React, { useContext } from "react";
import { Box, Flex, Text } from "rebass";
import ResumeDataContext from "../context/ResumeDataContext";
import EducationItem from "./educationItem";

export default function EducationSection() {
  const resumeData = useContext(ResumeDataContext);
  const educationList = resumeData.education;
  return (
    <Flex flexDirection="column">
      <Box>
        <Text variant="sectionHeader">Education</Text>
      </Box>
      <Box px={3}>
        {educationList.map((educationObj, i) => {
          const { institution, area, studyType, startDate, endDate, gpa } = educationObj;
          return (
            <Box py={2} sx={i > 0 ? { borderTop: "1px dotted" } : null}>
              <EducationItem
                institution={institution}
                area={area}
                studyType={studyType}
                startDate={startDate}
                endDate={endDate}
                gpa={gpa}
              />
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
}
