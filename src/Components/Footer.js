import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './CMcss.css'; // Import file CSS untuk styling tambahan

const Footer = () => {
  return (
    <footer className="footer text-center py-3">
      <Container>
        <Row>
          <Col>
            <p className="text-muted">© 2024 SDAL. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;