import React, { useState, useEffect } from "react";

const Cart = (props) => {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    setCartProducts(props);
  }, [props]);
  return <div>this is cart</div>;
};

export default Cart;
