import React from "react";
import { Flex, Image, Text } from "rebass";

import profilePic from "../res/profile-image.jpeg";

export default function HeadImage() {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Image src={profilePic} sx={{ width: ["35%", "30%", "25%", "15%"], borderRadius: "100%" }} />
      <Text color="text" py={[1, 3]} fontWeight="bold" fontSize={[3, 4]}>
        William Lin
      </Text>
    </Flex>
  );
}
