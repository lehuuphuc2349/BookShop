import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={3} md={3} className="banner-item">
            <img src={banner1} alt="" />
          </Col>
          <Col lg={3} md={3} className="banner-item">
            <img src={banner2} alt="" />
          </Col>
          <Col lg={3} md={3} className="banner-item">
            <img src={banner3} alt="" />
          </Col>
          <Col lg={3} md={3} className="banner-item">
            <img src={banner4} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
