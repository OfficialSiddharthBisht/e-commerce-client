import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product ,key }) => {
  return (
    <Link className="pro" key={key} to={`/product/${product._id}`}>
      <img src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5581/5581597cv11d.jpg"} />
      <div className="des">
        <span>{product.name}</span>
        <h5>{product.description}</h5>
        <div className="star">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4>₹ {product.price}</h4>
      </div>
      <span href="#" className="fal fa-bag-shopping cart" />
    </Link>
  );
};

export default Product;
