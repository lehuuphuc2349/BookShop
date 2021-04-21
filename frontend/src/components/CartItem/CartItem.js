import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CartItem.css";
function CartItem() {
  return (
    <div className="cart-item">
      <Container>
        <Row>
          <Col md={3}>
            <img
              src="https://allitbooks.net/images/1148-beginning-programming-cpp-for-dummies-2nd-edition.jpg"
              alt=""
            />
          </Col>
          <Col md={7} className="cartitem-right">
            <Link to={`/books/111`} className="cartitem-name">
              <p>Beginning Programming with C++ For Dummies, 2nd Edition</p>
            </Link>
            <p>By: Stephen R. Davis </p>
            <p className="cart-item-price">
              Price: <span>$99</span>
            </p>
            <select value="1" className="cartitem-select">
              <option value="1">1</option>
            </select>
            <button className="cartitem-deleteBtn">
              <i className="fas fa-trash"></i>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartItem;
