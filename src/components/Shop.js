import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const [products, setProducts] = useState(props.products);
  useEffect(() => {
    setProducts(props.products);
  }, [props]);

  const productsArr = products.map((product) => {
    const newSource = {
      pathname: `/shop/${product.id}`,
      state: {
        ...product,
        // increment: props.incrementQuantityOfProduct,
        // decrement: props.decrementQuantityOfProduct,
        // quantityOfProduct: props.quantityOfProduct,
      },
    }; /* This object is added
     to prevent fetching data for every product page render.*/
    return (
      <div key={product.id}>
        <Link to={newSource}>
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
