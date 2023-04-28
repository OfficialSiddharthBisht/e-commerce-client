import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product ,key }) => {
  return (
    <Link className="pro" key={key}>
      <img src={product.images[0].url} alt={product.name} />
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
        <h4>{product.price}</h4>
      </div>
      <span href="#" className="fal fa-bag-shopping cart" />
    </Link>
  );
};

export default Product;
