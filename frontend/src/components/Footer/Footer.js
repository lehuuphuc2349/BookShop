import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import payment from "../../images/payment-method.png";
import security1 from "../../images/godaddy.svg";
import security2 from "../../images/norton.svg";
import security3 from "../../images/ssl.svg";
import copyright1 from "../../images/copyright1.png";
import copyright2 from "../../images/copyright2.svg";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col lg={3} md={6}>
            <div className="footer-widget">
              <h2>Get In Touch</h2>
              <div className="contact-info">
                <p>
                  <i className="fa fa-map-marker"> K43/3, Son Tra, Da Nang</i>
                </p>
                <p>
                  <i class="fa fa-envelope"></i> lephuc2349@gmail.com
                </p>
                <p>
                  <i class="fa fa-phone"></i> 0905-982-524
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-widget">
              <h2>Follow Us</h2>
              <div className="contact-info">
                <div className="social">
                  <a href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div class="footer-widget">
              <h2>Company Info</h2>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer-widget">
              <h2>Purchase Info</h2>
              <ul>
                <li>
                  <a href="">Pyament Policy</a>
                </li>
                <li>
                  <a href="">Shipping Policy</a>
                </li>
                <li>
                  <a href="">Return Policy</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center payment">
          <Col md={6}>
            <div className="payment-method">
              <h2>We Apcept: </h2>
              <img src={payment} alt="" />
            </div>
          </Col>
          <Col md={6}>
            <div className="payment-security">
              <h2>Secured By: </h2>
              <img src={security1} alt="" />
              <img src={security2} alt="" />
              <img src={security3} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md={6} className="copy-right">
              <p>
                Copyright &copy;
                <a
                  target="_blank"
                  href="https://www.facebook.com/huuphuc23499/"
                >
                  2021-ITBookshop.vn
                </a>
                . All Rights Reserved
              </p>
            </Col>
            <Col md={6} className="copyright-by">
              <img src={copyright1} alt="" />
              <span>
                <img src={copyright2} alt="" />
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
