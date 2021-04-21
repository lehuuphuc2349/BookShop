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
        <div className="time-current-sale">
          <Row className="align-items-center">
            <Col md={3} sm={12} className="time-sale-item active">
              <h3>09:00</h3>
              <p>Current</p>
            </Col>
            <Col md={3} sm={12} className="time-sale-item ">
              <h3>10:00</h3>
              <p>Upcoming</p>
            </Col>
            <Col md={3} sm={12} className="time-sale-item ">
              <h3>11:00</h3>
              <p>Upcoming</p>
            </Col>
            <Col md={3} sm={12} className="time-sale-item ">
              <h3>12:00</h3>
              <p>Upcoming</p>
            </Col>
          </Row>
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
        <div className="d-flex justify-content-center" href="/books">
          <ButtonStyleType
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
            onClick="/books"
          >
            <a href="/books">LOAD MORE</a>
          </ButtonStyleType>
        </div>
      </Container>
    </div>
  );
}

export default FlashSale;
