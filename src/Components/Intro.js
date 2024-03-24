import React from 'react';
import { Col, Container, Row} from "react-bootstrap";
import './CMcss.css'; // Import file CSS untuk styling tambahan

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
          <div className="title"  >SMART DOOR ACCESS</div>
            <div className="title" >&</div>
            <div className="title" >AUTOMATIC LAMP</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro
