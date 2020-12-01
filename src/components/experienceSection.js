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
      <Box px={3}>
        {workExperienceList.map((workObj, i) => {
          const { position, company, startDate, endDate, summary } = workObj;
          return (
            <Box py={2} sx={i > 0 ? { borderTop: "1px dotted" } : null}>
              <ExperienceItem
                title={position}
                company={company}
                dates={`${startDate} - ${endDate ?? "present"}`}
                summary={summary}
              />
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
}
