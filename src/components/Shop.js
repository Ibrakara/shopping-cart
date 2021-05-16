import React from "react";
import { Link } from "react-router-dom";
import "./styles/Shop.css";

const Shop = (props) => {
  const products = props.products;

  const productsArr = products.map((product) => {
    return (
      <Link
        className="shop-product-card"
        key={product.id}
        to={`/shop/${product.id}`}
      >
        <img src={product.image} width="60" alt="product" />
        <p className="product-title">{product.title}</p>
        <p className="product-price">{product.price}$</p>
      </Link>
    );
  });
  return <div id="shop-div">{productsArr}</div>;
};

export default Shop;
