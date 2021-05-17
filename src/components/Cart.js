import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "./styles/Cart.css";

const Cart = (props) => {
  const cartProducts = props.cartProducts;
  const isCartEmpty = cartProducts.length === 0;
  let total = cartProducts.reduce((acc, curr) => {
    return (acc += curr.quantity * curr.price);
  }, 0);
  total = Math.round(total * 100) / 100; //Rounding the total

  const newCartProducts = cartProducts.map((cartProduct) => {
    return (
      <div className="cart-product-container" key={cartProduct.id}>
        <ProductCard
          product={cartProduct}
          increment={props.incrementQuantityOfCartProduct}
          decrement={props.decrementQuantityOfCartProduct}
        />
        <button
          onClick={() => {
            props.removeFromCart(cartProduct.id);
          }}
        >
          <img
            className="cart-product-remove-img"
            width="20"
            src="https://icon-library.com/images/img_487212.png"
            alt="remove"
          />
        </button>
      </div>
    );
  });
  return (
    <div className="cart">
      <div className="cart-products">{newCartProducts}</div>
      {isCartEmpty ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <div className="cart-checkout-div">
          <h2>Total: {total}$</h2>
          <button onClick={() => props.checkOut(total)}>Check Out</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
