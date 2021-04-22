import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { ButtonStyleType } from "../Button/ButtonStyleType";
import { getBooks as listBooks } from "../../redux/action/bookActions";
import Book from "../Book/Book";
import "./CurrentBestSeller.css";
function CurrentBestSeller() {
  const dispatch = useDispatch();
  const getBooks = useSelector((state) => state.getBooks);
  const { books, loading, error } = getBooks;
  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

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
          {loading ? (
            <h3>Loading..</h3>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            books.slice(0, 4).map((book) => (
              <Col md={3}>
                <Book
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
        <div className="d-flex justify-content-center">
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

export default CurrentBestSeller;
