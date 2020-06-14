import styled from "styled-components";
import React, { useState } from "react";
const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid darkgray;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-bottom: 3vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: darkgray;
    color: white;
  }
`;
export const Youtube = () => {
  const [monetized, setMonetized] = useState(false);
  if (document.monetization) {
    document.monetization.addEventListener("monetizationstart", () => {
      setMonetized(true);
    });
    document.monetization.addEventListener("monetizationstop", () => {
      setMonetized(false);
    });
    // document.monetization.addEventListener("monetizationprogress", (ev) => {
    //   // initialize currency and scale on first progress event
    //   console.log(ev);
    // });
  }
  return monetized ? (
    <Block>
      <h1>Youtube Video</h1>
      <iframe
        title="s"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sBNtvg5D2CM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Block>
  ) : (
    "please enable web monetization to see youtube video"
  );
};
