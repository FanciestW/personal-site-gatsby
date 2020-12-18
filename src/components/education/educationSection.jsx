import React, { useContext } from "react";
import { Box, Flex, Text } from "rebass";
import ResumeDataContext from "../context/ResumeDataContext";

export default function EducationSection() {
  const resumeData = useContext(ResumeDataContext);
  const educationList = resumeData.education
  return (
    <Flex flexDirection="column">
      <Box>
        <Text variant="sectionHeader">Education</Text>
      </Box>
      <Box>
        
      </Box>
    </Flex>
  )
}
