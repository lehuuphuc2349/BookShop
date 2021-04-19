import React from "react";
import "./BookFlashSale.css";
function BookFlashSale() {
  return (
    <div className="book-item">
      {/* <div className="hotdeal">
        <img src={hotdeal} alt="" />
      </div> */}
      <div className="book-image">
        <div className="label-sale">
          <span>23%</span>
        </div>
        <a href="#">
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
          <span className="old-price">$99</span>
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
