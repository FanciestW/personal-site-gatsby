import React, { useContext } from "react";
import { Flex, Image, Text } from "rebass";
import TypistLoop from "./typistLoop";
import ResumeDataContext from "./ResumeDataContext";

import profilePic from "../res/profile-image.jpeg";

export default function HeadImage() {
  const resumeData = useContext(ResumeDataContext);
  return (
    <Flex
      mb={[10, 20]}
      style={{ borderBottom: "1px solid" }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column">
      <Image src={profilePic} variant="circleHeaderImage" />
      <Text color="text" pt={[2, 3]} fontWeight="bold" fontSize={[4, 5]}>
        {resumeData.basics.name || "No Name"}
      </Text>
      <TypistLoop
        cursor={{ blink: true, element: "_" }}
        leadText="I'm a "
        textList={["Software Engineer", "Student", "Friend"]}
      />
    </Flex>
  );
}