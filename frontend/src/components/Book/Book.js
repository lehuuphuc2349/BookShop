import React from "react";
import hotdeal from "../../images/hotdeal.png";
import "./Book.css";
function Book() {
  return (
    <div className="book-item">
      <div className="hotdeal">
        <img src={hotdeal} alt="" />
      </div>
      <div className="book-image">
        <a href="/book/111">
          <img
            src="https://allitbooks.net/images/1148-beginning-programming-cpp-for-dummies-2nd-edition.jpg"
            alt=""
          />
        </a>
      </div>

      <div className="book-title">
        <h5>Beginning Programming with C++ For Dummies, 2nd Edition</h5>
      </div>
      <div class="book-price">
        <h3>
          <span>$</span>99
        </h3>
        <button class="btn" href="">
          <i class="fa fa-shopping-cart"></i> ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default Book;
