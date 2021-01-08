import React, { useContext } from "react";
import { Box, Flex, Text } from "rebass";
import ExperienceItem from "./experienceItem";
import ResumeDataContext from "../context/ResumeDataContext";

export default function ExperienceSection() {
  const resumeData = useContext(ResumeDataContext);
  const workExperienceList = resumeData.work;
  return (
    <Flex flexDirection="column" style={{ borderBottom: "1px solid" }} pb={[1, 2]} mb={[10, 20]}>
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
                startDate={startDate}
                endDate={endDate}
                summary={summary}
              />
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
}
