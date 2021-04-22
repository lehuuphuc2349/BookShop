import React from "react";
import hotdeal from "../../images/hotdeal.png";
import "./Book.css";
function Book({ imageUrl, name, price, bookId }) {
  return (
    <div className="book-item">
      <div className="hotdeal">
        <img src={hotdeal} alt="" />
      </div>
      <div className="book-image">
        <a href={`/books/${bookId}`}>
          <img src={imageUrl} alt={name} />
        </a>
      </div>

      <div className="book-title">
        <h5>{name}</h5>
      </div>
      <div class="book-price">
        <h3>
          <span>$</span>
          {price}
        </h3>
        <button class="btn" href="">
          <i class="fa fa-shopping-cart"></i> ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default Book;
