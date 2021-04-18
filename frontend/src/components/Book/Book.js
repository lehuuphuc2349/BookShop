import React from "react";
import "./Book.css";
function Book() {
  return (
    <div className="book-item">
      <div className="book-title">
        <p>Book Name</p>
        {/* <div class="ratting">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div> */}
      </div>
      <div className="book-image">
        <a href="#">
          <img
            src="https://allitbooks.net/images/1148-beginning-programming-cpp-for-dummies-2nd-edition.jpg"
            alt=""
          />
        </a>
        <div class="product-action">
          <a href="#">
            <i class="fa fa-cart-plus"></i>
          </a>
          <a href="#">
            <i class="fa fa-heart"></i>
          </a>
          <a href="#">
            <i class="fa fa-search"></i>
          </a>
        </div>
      </div>
      <div class="book-price">
        <h3>
          <span>$</span>99
        </h3>
        <a class="btn" href="">
          <i class="fa fa-shopping-cart"></i>ADD TO CART
        </a>
      </div>
    </div>
  );
}

export default Book;
