import React from "react";
import ProductReviewsCard from "./ProductReviewsCard";
import "../styles/productcard.css";

function ProductReviews({ productReviews }) {
  return (
    <div className="productreview">
      {productReviews.map((item, index) => (
        <ProductReviewsCard
          image={item.image}
          review={item.review}
          price={item.price}
          name={item.name}
          key={item.image}
          index={index}
        />
      ))}
    </div>
  );
}

export default ProductReviews;
