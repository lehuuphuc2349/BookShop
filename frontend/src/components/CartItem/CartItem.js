import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CartItem.css";
function CartItem({ item, qtyChangeHandler, removeHandler }) {
  return (
    <div className="cart-item">
      <Container>
        <Row>
          <Col md={3}>
            <img src={item.imageUrl} alt={item.name} />
          </Col>
          <Col md={7} className="cartitem-right">
            <Link to={`/books/${item.book}`} className="cartitem-name">
              <p>{item.name}</p>
            </Link>
            <p>By: {item.author} </p>
            <p className="cart-item-price">
              Price: <span>${item.price}</span>
            </p>
            <select
              value={item.qty}
              onChange={(e) => qtyChangeHandler(item.book, e.target.value)}
              className="cartitem-select"
            >
              {[...Array(item.countInStock).keys()].map((x) => (
                <option value={x + 1} key={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
            <button
              className="cartitem-deleteBtn"
              onClick={() => removeHandler(item.book)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CartItem;
