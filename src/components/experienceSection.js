import React, { useContext } from "react";
import { Flex, Text } from "rebass";
import ExperienceItem from "./experienceItem";
import ResumeDataContext from "./ResumeDataContext";

export default function ExperienceSection() {
  const resumeData = useContext(ResumeDataContext);
  const workExperienceList = resumeData.work;
  return (
    <Flex>
      <Text variant="sectionHeader">Experience</Text>
      {workExperienceList.map((workObj) => {
        return <ExperienceItem></ExperienceItem>;
      })}
    </Flex>
  );
}
