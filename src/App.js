import React from "react";
import styled from "styled-components";
import { Google } from "./item/Google";
import { Youtube } from "./item/Youtube";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
`;

const Primary = styled.div`
  max-width: 650px;
  margin: 0 auto;
  font-family: "Sen", sans-serif;
`;
function Main(props) {
  return (
    <Wrap onClick={() => props.history.push("/youtube")}>
      <Primary>
        <Google />
      </Primary>
    </Wrap>
  );
}
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/youtube">
          <Wrap>
            <Primary>
              <Youtube />
            </Primary>
          </Wrap>
        </Route>
        <Route path="/" component={Main}></Route>
      </Switch>
    </Router>
  );
}
