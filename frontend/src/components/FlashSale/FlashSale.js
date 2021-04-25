import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import BookFlashSale from "../BookFlashSale/BookFlashSale";
import { getBooks as listBooks } from "../../redux/action/bookActions";
import { ButtonStyleType } from "../Button/ButtonStyleType";
import "./FlashSale.css";
function FlashSale() {
  const dispatch = useDispatch();
  const getBooks = useSelector((state) => state.getBooks);
  const { books, loading, error } = getBooks;
  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);
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
            <Col lg={3} md={3} sm={3} xs={3} className="time-sale-item active">
              <h3>09:00</h3>
              <p>Current</p>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3} className="time-sale-item ">
              <h3>10:00</h3>
              <p>Upcoming</p>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3} className="time-sale-item ">
              <h3>11:00</h3>
              <p>Upcoming</p>
            </Col>
            <Col lg={3} md={3} sm={3} xs={3} className="time-sale-item ">
              <h3>12:00</h3>
              <p>Upcoming</p>
            </Col>
          </Row>
        </div>
        <Row className="align-items-center">
          {loading ? (
            <h3>Loading... </h3>
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            books.slice(4, 12).map((book) => (
              <Col md={3} sm={12}>
                <BookFlashSale
                  key={book._id}
                  bookId={book._id}
                  name={book.name}
                  price={book.price}
                  imageUrl={book.imageUrl}
                />
              </Col>
            ))
          )}
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
