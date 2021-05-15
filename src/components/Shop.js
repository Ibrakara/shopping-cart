import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const products = props.products;

  const productsArr = products.map((product) => {
    return (
      <div key={product.id}>
        <Link to={`/shop/${product.id}`}>
          <img src={product.image} width="100" alt="product" />
          <p id="product-title">{product.title}</p>
          <p id="product-price">{product.price}$</p>
        </Link>
      </div>
    );
  });
  return (
    <div>
      <h1>Shop Page</h1>
      {productsArr}
    </div>
  );
};

export default Shop;
