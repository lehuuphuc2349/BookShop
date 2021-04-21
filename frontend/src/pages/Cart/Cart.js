import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";
function Cart() {
  return (
    <Container>
      <div className="cart">
        <Row>
          <Col md={12} className="cart-header">
            <h2>Shopping Cart</h2>
          </Col>
          <Col md={12}>
            <CartItem />
          </Col>
          <Col md={12}>
            <CartItem />
          </Col>
          <Col md={12}>
            <CartItem />
          </Col>
          <Col md={12} className="cart-bottom">
            <p>
              Sub Total (1) items : <span>$99</span>
              <button type="submit">Procced to checkout</button>
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Cart;
