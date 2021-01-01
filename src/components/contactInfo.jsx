import React from "react";
import { Box, Flex, Text, Link } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import ResumeDataContext from "./context/ResumeDataContext";

export default function ContactInfo() {
  return (
    <Box>
      <Link variant="contactIconLink">
        <FontAwesomeIcon size="2x" icon={faEnvelope} />
      </Link>
      <Link variant="contactIconLink">
        <FontAwesomeIcon size="2x" icon={faGithub} />
      </Link>
      <Link variant="contactIconLink">
        <FontAwesomeIcon size="2x" icon={faFacebook} />
      </Link>
      <Link variant="contactIconLink">
        <FontAwesomeIcon size="2x" icon={faTwitter} />
      </Link>
    </Box>
  );
}
