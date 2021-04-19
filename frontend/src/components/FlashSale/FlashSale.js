import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BookFlashSale from "../BookFlashSale/BookFlashSale";
import CountdowTimer from "../CountdowTimer/CountdowTimer";
import { ButtonStyleType } from "../Button/ButtonStyleType";
import "./FlashSale.css";
function FlashSale() {
  return (
    <div className="flash-sale book">
      <Container>
        <div className="section-header">
          <h1>
            <i class="fas fa-star"></i> Flash Sale{" "}
            <span>{/* Countdow timer: <CountdowTimer /> */}</span>
          </h1>
        </div>
        <Row className="align-items-center">
          <Col md={3} sm={12}>
            <BookFlashSale />
          </Col>
          <Col md={3} sm={12}>
            <BookFlashSale />
          </Col>
          <Col md={3} sm={12}>
            <BookFlashSale />
          </Col>
          <Col md={3} sm={12}>
            <BookFlashSale />
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <ButtonStyleType buttonStyle="btn--primary" buttonSize="btn--medium">
            LOAD MORE
          </ButtonStyleType>
        </div>
      </Container>
    </div>
  );
}

export default FlashSale;
