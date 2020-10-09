import React from "react";
import { Flex, Image, Text } from "rebass";

import profilePic from "../res/profile-image.jpeg";
import TypistLoop from "./typistLoop";

export default function HeadImage() {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Image src={profilePic} variant="circleHeaderImage" />
      <Text color="text" py={[1, 2]} fontWeight="bold" fontSize={[3, 4]}>
        William Lin
      </Text>
      <TypistLoop
        cursor={{ blink: true, element: "_" }}
        leadText="I'm a "
        textList={["Software Engineer", "Student", "Friend"]}
      />
    </Flex>
  );
}
