import React from "react";
import { Box, Flex, Text } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import ResumeDataContext from "./context/ResumeDataContext";

export default function ContactInfo() {
  const faIconStyle = { margin: "0px 5px" };
  return (
    <Box>
      <FontAwesomeIcon style={faIconStyle} size="2x" icon={faGithub} />
      <FontAwesomeIcon style={faIconStyle} size="2x" icon={faFacebook} />
      <FontAwesomeIcon style={faIconStyle} size="2x" icon={faTwitter} />
    </Box>
  );
}
