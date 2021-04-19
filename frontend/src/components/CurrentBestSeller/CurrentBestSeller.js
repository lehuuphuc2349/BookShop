import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ButtonStyleType } from "../Button/ButtonStyleType";
import Book from "../Book/Book";
import "./CurrentBestSeller.css";
function CurrentBestSeller() {
  const [button, setButton] = useState(true);
  return (
    <div className="current-bestsellers book">
      <Container>
        <div className="section-header">
          <h1>
            <i class="fab fa-hotjar"></i> Current Bestsellers
          </h1>
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
        <div className="d-flex justify-content-center">
          {button && (
            <ButtonStyleType
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
            >
              LOAD MORE
            </ButtonStyleType>
          )}
        </div>
      </Container>
    </div>
  );
}

export default CurrentBestSeller;
