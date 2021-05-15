import React from "react";

const ProductCard = (props) => {
  const productId = parseInt(props.product.id);
  let product = props.product;
  const increment = props.increment;
  const decrement = props.decrement;
  const quantityOfProduct = product.quantity;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={`${product.image}`} width="100" alt="product" />
      <h2>{product.price}$</h2>
      <h2>{quantityOfProduct}</h2>
      <br />
      <button onClick={() => increment(productId)}>Increment</button>
      <button onClick={() => decrement(productId)}>Decrement</button>
    </div>
  );
};

export default ProductCard;
