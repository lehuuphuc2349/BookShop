import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/action/cartActions";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getCartPriceTotal = () => {
    return cartItems.reduce(
      (price, item) => Number(item.price * item.qty) + price,
      0
    );
  };
  return (
    <Container>
      <div className="cart">
        <Row>
          <Col md={12} className="cart-header">
            <h2>Shopping Cart</h2>
          </Col>
          {cartItems.length === 0 ? (
            <div>
              Your cart is empty <Link to="/books">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <Col md={12}>
                <CartItem
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeHandler}
                />
              </Col>
            ))
          )}
          <Col md={12} className="cart-bottom">
            <p>
              Sub Total ({getCartCount()}) items :{" "}
              <span>${getCartPriceTotal()}</span>
              <button type="submit">Procced to checkout</button>
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Cart;
