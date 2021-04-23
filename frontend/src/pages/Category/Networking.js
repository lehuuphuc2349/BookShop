import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Book from "../../components/Book/Book";
import { useDispatch, useSelector } from "react-redux";
import { getBooks as listBooks } from "../../redux/action/bookActions";
import "./Networking.css";
function Networking() {
  const dispatch = useDispatch();
  const getAllBooks = useSelector((state) => state.getBooks);
  const { books, loading, error } = getAllBooks;
  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);
  return (
    <div className="networking">
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="title">
            <h2>Networking</h2>
          </Col>
          {loading ? (
            <h3>Loading...</h3>
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            Array.from(
              books.filter((book) => {
                return book.category == "Networking";
              })
            ).map((book) => (
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

export default Networking;
