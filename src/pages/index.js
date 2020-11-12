import React from "react";
import { ThemeProvider } from "theme-ui";
import { Flex } from "rebass";
import Body from "../components/body";
import Header from "../components/header";
import ResumeDataContext from "../components/ResumeDataContext";

import theme from "../themes";
import "../styles/index.scss";
import ResumeDataJSON from "../res/resume.json";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column" style={{ height: "100vh" }}>
        <ResumeDataContext.Provider value={ResumeDataJSON}>
          <Header />
          <Body />
        </ResumeDataContext.Provider>
      </Flex>
    </ThemeProvider>
  );
}
