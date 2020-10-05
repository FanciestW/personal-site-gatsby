import React from "react";
import { Box, Flex, Image } from "rebass";

import profilePic from "../res/profile-image.jpeg";

export default function HeadImage() {
  return (
    <Flex justifyContent="center">
      <Image src={profilePic} sx={{ width: ["50%", "25%"], borderRadius: "100%" }} />
    </Flex>
  );
}
