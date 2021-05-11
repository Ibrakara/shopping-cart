import React, { useState, useEffect } from "react";

const Product = ({ match }) => {
  const productId = match.params.id;
  console.log(match);
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={`${product.image}`} width="100" alt="product" />
      <h2>{product.price}$</h2>
      <br />
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
