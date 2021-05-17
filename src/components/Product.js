import React from "react";
import ProductCard from "./ProductCard";
import "./styles/Product.css";

const Product = (props) => {
  const isFetched = props.isFetched;
  const productId = parseInt(props.match.params.id);
  let product = props.products.find((product) => {
    return product.id === productId;
  });

  const incrementNumberOfCartProducts = props.incrementQuantityOfProduct;
  const decrementNumberOfCartProducts = props.decrementQuantityOfProduct;
  const addToCart = props.addToCart;

  return (
    <div className="product-div">
      {isFetched ? (
        <ProductCard
          product={product}
          increment={incrementNumberOfCartProducts}
          decrement={decrementNumberOfCartProducts}
        />
      ) : null}

      {isFetched ? (
        <div className="product-desc-div">
          <button onClick={() => addToCart(productId, product.quantity)}>
            Add to Cart
          </button>
          <p>{product.description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
