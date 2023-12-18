import React from "react";
import "../styles/productcard.css";

function ProductReviewsCard({ image, index, review, price, name }) {
  return (
    <div className="productreviewcard">
      <img src={image} alt={`review ${index}`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
}

export default ProductReviewsCard;
