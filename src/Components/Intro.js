import React from 'react';
import { Col, Container, Row, Button } from "react-bootstrap"
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-center text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">SMART DOOR ACCESS</div>
            <div className="title">AUTOMATIC LAMP</div>
            <div className="introButton mt-8 text-center">
              <Button variant="dark">Group 9</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro