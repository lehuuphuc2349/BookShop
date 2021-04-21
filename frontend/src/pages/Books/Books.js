import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Book from "../../components/Book/Book";
import "./Books.css";
function Books() {
  return (
    <div className="books">
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="books-title">
            <h2>All Books</h2>
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
          <Col md={3}>
            <Book />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Books;
