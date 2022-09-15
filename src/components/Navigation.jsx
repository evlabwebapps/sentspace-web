import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import logo from "../images/logo.png";
import logoSentspace from "../images/logo_sentspace.png";
import logoMIT from "../images/mit.png";
import React from "react";
import { routes } from "../routes";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logoMIT}
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="MIT Logo"
              style={{marginRight: "10px"}}
            />
            <img
              src={logo}
              width="40"
              height="30"
              className="d-inline-block align-top"
              alt="EvLab Logo"
              style={{marginRight: "10px"}}
            />
            <img
              src={logoSentspace}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="SentSpace Logo"
              style={{marginRight: "10px"}}
            />   
            SentSpace
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          {routes.map((route, _) => (
            <LinkContainer key={route.label} to={route.path} exact={route?.exact || false}>
              <Nav.Link>{route.label}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}
