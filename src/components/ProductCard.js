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
      <br />
      <button onClick={() => decrement(productId)}>
        <img
          width="20"
          src="https://image.flaticon.com/icons/png/128/808/808534.png"
          alt="decrement"
        />
      </button>
      <h2>{quantityOfProduct}</h2>
      <button onClick={() => increment(productId)}>
        <img
          width="20"
          src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png"
          alt="increment"
        />
      </button>
    </div>
  );
};

export default ProductCard;
