import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Book from "../Book/Book";
import "./CurrentBestSeller.css";
function CurrentBestSeller() {
  return (
    <div className="current-bestsellers book">
      <Container>
        <div className="section-header">
          <h1>Current Bestsellers</h1>
        </div>
        <Row className="align-items-center">
          <Col md={3}>
            <Book />
          </Col>
          <Col md={3}>
            <Book />
          </Col>
          <Col md={3}>
            <Book />
          </Col>
          <Col md={3}>
            <Book />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CurrentBestSeller;
