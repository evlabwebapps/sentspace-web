import {Col, Container, Row} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {routes} from "../routes";


export default function MainContent() {
  return (
    <Container>
      <Row>
        <Col md={{span: 12}} style={{padding: '40px 0 0 0'}}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.child/>}
              />
            ))}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}