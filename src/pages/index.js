import React from "react";
import { ThemeProvider } from "theme-ui";
import { Flex } from "rebass";
import Body from "../components/body";
import Header from "../components/header";
import Footer from "../components/footer";
import ResumeDataContext from "../components/context/ResumeDataContext";

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
          <Footer />
        </ResumeDataContext.Provider>
      </Flex>
    </ThemeProvider>
  );
}
