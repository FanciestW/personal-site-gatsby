import React from "react";
import { Flex } from "rebass";
import Body from "../components/body";
import Header from "../components/header";
import Footer from "../components/footer";
import ResumeDataContext from "../components/context/ResumeDataContext";

import "../styles/index.scss";
import ResumeDataJSON from "../res/resume.json";

export default function Home() {
  return (
    <Flex flexDirection="column" style={{ height: "100vh" }}>
      <ResumeDataContext.Provider value={ResumeDataJSON}>
        <Header />
        <Body />
        <Footer />
      </ResumeDataContext.Provider>
    </Flex>
  );
}
