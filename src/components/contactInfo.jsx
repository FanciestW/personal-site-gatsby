import React, { useContext } from "react";
import { Box, Link } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import ResumeDataContext from "./context/ResumeDataContext";

export default function ContactInfo() {
  const resumeData = useContext(ResumeDataContext);
  console.log({ resumeData });
  const {
    basics: { email, profiles },
  } = resumeData;
  console.log({ email, profiles });
  let githubProfile, linkedinProfile, twitterProfile;
  profiles.forEach((profile) => {
    if (profile.network) {
      switch (profile.network.toLowerCase()) {
        case "github":
          githubProfile = profile;
          break;
        case "linkedin":
          linkedinProfile = profile;
          break;
        case "twitter":
          twitterProfile = profile;
          break;
        default:
          break;
      }
    }
  });
  console.log({ email, githubProfile, linkedinProfile, twitterProfile });
  return (
    <Box>
      <Link variant="contactIconLink" href={`mailto:${email}`} target="_blank">
        <FontAwesomeIcon size="2x" icon={faEnvelope} />
      </Link>
      <Link variant="contactIconLink" href={githubProfile.url} target="_blank">
        <FontAwesomeIcon size="2x" icon={faGithub} />
      </Link>
      <Link variant="contactIconLink" href={linkedinProfile.url} target="_blank">
        <FontAwesomeIcon size="2x" icon={faLinkedin} />
      </Link>
      <Link variant="contactIconLink" href={linkedinProfile.url} target="_blank">
        <FontAwesomeIcon size="2x" icon={faTwitter} />
      </Link>
    </Box>
  );
}
