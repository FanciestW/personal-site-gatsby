import React, { useContext } from "react";
import { Box, Flex, Text } from "rebass";
import ResumeDataContext from "./ResumeDataContext";

export default function EducationSection() {
  const resumeData = useContext(ResumeDataContext);
  return (
    <Flex flexDirection="column">
      <Box>
        <Text variant="sectionHeader">Education</Text>
      </Box>
    </Flex>
  )
}
