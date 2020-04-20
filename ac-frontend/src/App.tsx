import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import StalkMarket from "./components/stalk-market/StalkMarket";
import styled from "styled-components";
import { Nav, Container } from "react-bootstrap";
import Colors from "./common/Colors";
import CreateIsland from "./components/stalk-market/CreateIsland";
import OpenIsland from "./components/stalk-market/OpenIsland";
import "./common/_styling.scss"

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${Colors.lightgrey};
`;

const CustomNav = styled(Nav)`
  background-color: white;
  padding: 0.5%;
`;

const Content = styled(Container)`
  flex: 1;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const Footer = styled.div`
  text-align: center;
  padding: 0.5%;
  background-color: white;
`;

export default function App() {
  return (
    <Router>
      <Body>
        <CustomNav activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/stalk-market">Stalk Market</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
        </CustomNav>

        <Content>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/stalk-market/create">
              <CreateIsland />
            </Route>
            <Route path="/stalk-market/open-island">
              <OpenIsland />
            </Route>
            <Route path="/stalk-market">
              <StalkMarket />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>

        <Footer>
          Project developed and maintained by Didier Dias. All rights reserved.
        </Footer>
      </Body>
    </Router>
  );
}
