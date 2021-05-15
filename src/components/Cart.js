import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Cart = (props) => {
  const cartProducts = props.cartProducts;
  const newCartProducts = cartProducts.map((cartProduct) => {
    return (
      <div key={cartProduct.id}>
        <ProductCard
          product={cartProduct}
          increment={props.incrementQuantityOfCartProduct}
          decrement={props.decrementQuantityOfCartProduct}
        />
      </div>
    );
  });
  return (
    <div>
      this is cart
      {newCartProducts}
    </div>
  );
};

export default Cart;
