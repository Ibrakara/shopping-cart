import React from "react";
import ProductCard from "./ProductCard";

const Product = (props) => {
  const isFetched = props.isFetched;
  const productId = parseInt(props.match.params.id);
  let product = props.products.find((product) => {
    return product.id === productId;
  });

  const incrementNumberOfCartProducts = props.incrementQuantityOfProduct;
  const decrementNumberOfCartProducts = props.decrementQuantityOfProduct;
  const addToCart = props.addToCart;
  console.log(props);

  return (
    <div>
      {isFetched ? (
        <ProductCard
          product={product}
          increment={incrementNumberOfCartProducts}
          decrement={decrementNumberOfCartProducts}
        />
      ) : null}

      {isFetched ? (
        <button onClick={() => addToCart(productId, product.quantity)}>
          Add to Cart
        </button>
      ) : null}
    </div>
  );
};

export default Product;
