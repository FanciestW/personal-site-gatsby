import React, { useState } from "react";
import Typist from "react-typist";
import { Text } from "rebass";

export default function TypistLoop(props) {
  const [typistIndex, setTypistIndex] = useState(0);

  const leadText = props.leadText ?? "";
  const textList = props.textList ?? [];
  return (
    <Text style={{ display: "inline-flex" }} color="text" fontSize={[1, 2]}>
      <span style={{ whiteSpace: "pre" }}>{leadText}</span>
      <Typist cursor={props.cursor} key={typistIndex} onTypingDone={() => setTypistIndex(typistIndex + 1)}>
        {textList.map((text) => [<span>{text}</span>, <Typist.Backspace count={text.length} delay={1000} />])}
      </Typist>
    </Text>
  );
}
