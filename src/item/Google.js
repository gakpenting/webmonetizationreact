import styled from "styled-components";
import React from "react";
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
export const Google = () => (
  <Block>
    <h1>Google</h1>
    <p>
      Click this and you will go to youtube monetization embed component
      Page.
    </p>
    
  </Block>
);
