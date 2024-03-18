import React from 'react';
import { Col, Container, Row} from "react-bootstrap"


const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title" style={{ color: 'teal', fontSize: '100px'}} >SMART DOOR ACCESS</div>
            <div className="title" style={{ color: 'teal', fontSize: '100px'}} >AUTOMATIC LAMP</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro