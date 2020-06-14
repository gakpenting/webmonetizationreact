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
      This is Google. It's a search engine started by Sergey Brin and Larry
      Page.
    </p>
    <p>
      PageRank is the search algorithm that started it all. Today it's a
      multibillion dollar company.
    </p>
  </Block>
);
