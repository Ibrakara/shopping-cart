import React from "react";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const products = props.products;

  const productsArr = products.map((product) => {
    return (
      <div className="shop-poduct-card" key={product.id}>
        <Link to={`/shop/${product.id}`}>
          <img src={product.image} width="60" alt="product" />
          <p id="product-title">{product.title}</p>
          <p id="product-price">{product.price}$</p>
        </Link>
      </div>
    );
  });
  return <div id="shop-div">{productsArr}</div>;
};

export default Shop;
