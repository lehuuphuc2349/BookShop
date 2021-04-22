import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getBooks as listBooks } from "../../redux/action/bookActions";
import Book from "../../components/Book/Book";
import "./Books.css";
function Books() {
  const dispatch = useDispatch();
  const getBooks = useSelector((state) => state.getBooks);
  const { books, loading, error } = getBooks;
  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);
  return (
    <div className="books">
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="books-title">
            <h2>All Books</h2>
          </Col>
          {loading ? (
            <h3>loading...</h3>
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            books.map((book) => (
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
      </Container>
    </div>
  );
}

export default Books;
