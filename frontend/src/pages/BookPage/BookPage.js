import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CurrentBestSeller from "../../components/CurrentBestSeller/CurrentBestSeller";
import "./BookPage.css";
function BookPage() {
  return (
    <Container>
      <div className="bookpage">
        <Row>
          <Col md={4} className="left-info">
            <p className="back">
              <a href="/">Back to result</a>
            </p>
            <img
              src="https://allitbooks.net/images/1148-beginning-programming-cpp-for-dummies-2nd-edition.jpg"
              alt=""
            />
          </Col>

          <Col md={8} className="right-info">
            <p>Author: Stephen R. Davis </p>
            <h4>Beginning Programming with C++ For Dummies, 2nd Edition</h4>
            <p>Year: 2016</p>
            <p>
              Price: <span>$99</span>
            </p>
            <p>Status: On Stock</p>

            <p>
              Description: Beginning Programming with C++ For Dummies,
              2ndEdition gives you plain-English explanations of the
              fundamentalprinciples of C++, arming you with the skills and
              know-how toexpertly use one of the world’s most popular
              programming languages.You’ll explore what goes into creating a
              program, how to put thepieces together, learn how to deal with
              standard programmingchallenges, and much more.
            </p>
            <p>
              Quantity: {""}
              <select value="">
                <option value="1">1</option>
              </select>
            </p>
            <p>
              <button>ADD TO CART</button>
              <button>BUY NOW</button>
            </p>
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
