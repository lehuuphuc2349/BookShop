import React from "react";
import "./BookFlashSale.css";
function BookFlashSale({ imageUrl, name, price, bookId }) {
  return (
    <div className="book-item">
      <div className="book-image">
        <div className="label-sale">
          <span>23%</span>
        </div>
        <a href={`/books/${bookId}`}>
          <img src={imageUrl} alt={name} />
        </a>
      </div>

      <div className="book-title">
        <h5>{name}</h5>
      </div>
      <div class="book-price">
        <h3>
          <span className="old-price">${price}</span>
          <span className="new-price">$60</span>
        </h3>
        <button class="btn" href="">
          <i class="fa fa-shopping-cart"></i> ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default BookFlashSale;
