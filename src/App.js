import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [quantityOfProduct, setQuantityOfProduct] = useState(0);
  const incrementQuantityOfProduct = (productId) => {
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        product.quantity = product.quantity + 1;
      }
      return product;
    });
    setProducts(newProducts);
  };
  const decrementQuantityOfProduct = (productId) => {
    const newProducts = products.map((product) => {
      if (product.id === productId && product.quantity > 0) {
        product.quantity = product.quantity - 1;
      }
      return product;
    });
    setProducts(newProducts);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const quantityAddedArray = data.map((product) => {
          return (product = { ...product, quantity: 0 });
        });
        setProducts(quantityAddedArray);
      });
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/shop/:id"
          render={(props) => {
            return (
              <Product
                {...props}
                incrementQuantityOfProduct={incrementQuantityOfProduct}
                decrementQuantityOfProduct={decrementQuantityOfProduct}
                quantityOfProduct={quantityOfProduct}
                products={products}
              />
            );
          }}
        />
        <Route
          exact
          path="/shop"
          render={(props) => {
            return (
              <Shop
                {...props}
                products={products}
                incrementQuantityOfProduct={incrementQuantityOfProduct}
                decrementQuantityOfProduct={decrementQuantityOfProduct}
                quantityOfProduct={quantityOfProduct}
              />
            );
          }}
        />
        <Route
          path="/cart"
          render={(props) => {
            return <Cart {...props} />;
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
