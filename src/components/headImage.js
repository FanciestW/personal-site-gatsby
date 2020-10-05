import React from "react";
import { Box, Flex, Image, Text } from "rebass";

import profilePic from "../res/profile-image.jpeg";

export default function HeadImage() {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Image src={profilePic} sx={{ width: ["35%", "25%"], borderRadius: "100%" }} />
      <Text fontWeight="bold" fontSize={[3, 4]}>
        William Lin
      </Text>
    </Flex>
  );
}
