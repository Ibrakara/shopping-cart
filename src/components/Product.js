import React, { useState } from "react";

const Product = (props) => {
  const productId = parseInt(props.match.params.id);
  const product = props.products[productId - 1];
  const incrementNumberOfCartProducts = props.incrementQuantityOfProduct;
  const decrementNumberOfCartProducts = props.decrementQuantityOfProduct;
  const quantityOfProduct = product.quantity;
  console.log(props);

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={`${product.image}`} width="100" alt="product" />
      <h2>{product.price}$</h2>
      <br />
      <button onClick={() => incrementNumberOfCartProducts(productId)}>
        Increment
      </button>
      <h2>{quantityOfProduct}</h2>
      <button onClick={() => decrementNumberOfCartProducts(productId)}>
        Decrement
      </button>
      <br />
    </div>
  );
};

export default Product;
