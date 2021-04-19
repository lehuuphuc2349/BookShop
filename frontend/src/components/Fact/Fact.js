import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Fact.css";
function Fact() {
  return (
    <div className="fact">
      <Container fluid>
        <Row className=" align-items-center">
          <Col lg={3} md={6} className=" fact-col">
            <div className="fact-content">
              <i className="fab fa-cc-mastercard"></i>
              <h2>Secure Payment</h2>
              <p>
                Secure Payment Services is a safer, faster, more secure way to
                pay online
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} className="fact-col">
            <div className="fact-content">
              <i className="fa fa-truck"></i>
              <h2>Worldwide Delivery</h2>
              <p>
                International shipping is taken from one country and delivered
                to an address in another.
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} className="fact-col">
            <div className="fact-content">
              <i className="fa fa-sync-alt"></i>
              <h2>90 Days Return</h2>
              <p>
                You have plenty of time to decide whether you'd like to return
                or exchange book
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} className="fact-col">
            <div className="fact-content">
              <i className="fa fa-comment"></i>
              <h2>24/7 Support</h2>
              <p>
                24/7 support is a kind of support that is available throughout
                the day
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fact;
