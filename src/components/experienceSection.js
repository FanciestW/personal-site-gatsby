import React, { useContext } from "react";
import { Box, Flex, Text } from "rebass";
import ExperienceItem from "./experienceItem";
import ResumeDataContext from "./ResumeDataContext";

export default function ExperienceSection() {
  const resumeData = useContext(ResumeDataContext);
  const workExperienceList = resumeData.work;
  return (
    <Flex flexDirection="column">
      <Box>
        <Text variant="sectionHeader">Experience</Text>
      </Box>
      {workExperienceList.map((workObj) => {
        return (
          <Box>
            <ExperienceItem></ExperienceItem>
          </Box>
        );
      })}
    </Flex>
  );
}
