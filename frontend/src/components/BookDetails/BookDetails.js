import React from "react";
import "./BookDetails.css";
function BookDetails() {
  return (
    <div className="book-details">
      <div className="book-details-title">
        <h2>Book details</h2>
      </div>
      <div className="book-details-info">
        <ul className="list-item">
          <li className="item">
            <span className="text-bold">Languages : </span> English
          </li>
          <li className="item">
            <span className="text-bold">Weight : </span> 1.1 pounds
          </li>
          <li className="item">
            <span className="text-bold">Dimensions : </span> 6.37 x 1.09 x 9.6
            inches
          </li>
          <li className="item">
            <span className="text-bold">Best Sellers Rank : </span> #26 in Books
          </li>
          <li className="item">
            <span className="text-bold">Customer Reviews : </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BookDetails;
