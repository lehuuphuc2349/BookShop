import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import BookDetails from "../../components/BookDetails/BookDetails";
import CurrentBestSeller from "../../components/CurrentBestSeller/CurrentBestSeller";
import { getBookDetails } from "../../redux/action/bookActions";
import { addToCart } from "../../redux/action/cartActions";
import "./BookPage.css";
function BookPage({ match, history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const bookDetails = useSelector((state) => state.getBookDetails);
  const { book, loading, error } = bookDetails;
  useEffect(() => {
    if (book && match.params.id !== book._id) {
      dispatch(getBookDetails(match.params.id));
    }
  }, [dispatch, match, book]);
  const addToCartHandler = () => {
    dispatch(addToCart(book._id, qty));
    history.push("/cart");
  };
  return (
    <Container>
      <div className="bookpage">
        <Row>
          {loading ? (
            <h3>Loading...</h3>
          ) : error ? (
            <h3>{error}</h3>
          ) : (
            <>
              <Col md={4} className="left-info">
                <p className="back">
                  <a href="/">Back to result</a>
                </p>
                <img src={book.imageUrl} alt={book.name} />
              </Col>

              <Col md={8} className="right-info">
                <p>Author: {book.author} </p>
                <h4>{book.name}</h4>
                <p>Year: {book.year}</p>
                <p>
                  Price: <span>${book.price}</span>
                </p>
                <p>Pages: {book.pages}</p>
                <p>
                  Status: {book.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </p>
                <p>Category: {book.category}</p>
                <p>{book.bookDescription}</p>
                <p>
                  Quantity: {""}
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(book.countInStock).keys()].map((item) => (
                      <option key={item + 1} value={item + 1}>
                        {item + 1}
                      </option>
                    ))}
                  </select>
                </p>
                <p>
                  <button onClick={addToCartHandler}>ADD TO CART</button>
                  <button>BUY NOW</button>
                </p>
              </Col>
            </>
          )}

          <Col md={12}>
            <BookDetails />
          </Col>
        </Row>
      </div>
      <div className="recommded">
        <Container>
          <Row>
            <Col md={12}>
              <CurrentBestSeller />
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default BookPage;
