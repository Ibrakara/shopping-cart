import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
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
  const resetProductQuantities = () => {
    const newProducts = products.map((product) => {
      product.quantity = 0;
      return product;
    });
    setProducts(newProducts);
  };
  const incrementQuantityOfCartProduct = (productId) => {
    const newCartProducts = cartProducts.map((product) => {
      if (product.id === productId) {
        product.quantity = product.quantity + 1;
      }
      return product;
    });
    setCartProducts(newCartProducts);
  };
  const decrementQuantityOfCartProduct = (productId) => {
    const newCartProducts = cartProducts.map((product) => {
      if (product.id === productId && product.quantity > 0) {
        product.quantity = product.quantity - 1;
      }
      return product;
    });
    setCartProducts(newCartProducts);
  };
  const addToCart = (productId, productQuantity) => {
    if (productQuantity !== 0) {
      const prd = [...products].find((product) => {
        return product.id === productId;
      });
      console.log(prd === products[0]);
      console.log("object is check", Object.is(prd, products[0]));
      const newPrd = {
        ...prd,
      }; /*Array.find method does not create a deep copy but shallow copy of and array element,
       thats why I have to cahnge the memory reference with spread operator*/
      const isProductInCart = cartProducts.find((cartProduct) => {
        if (cartProduct.id === productId) {
          return true;
        }
      });

      if (isProductInCart) {
        const newCartArr = cartProducts.map((cartProducts) => {
          if (productId === cartProducts.id) {
            cartProducts.quantity = cartProducts.quantity + productQuantity;
          }
          return cartProducts;
        });
        setCartProducts((prevState) => newCartArr);
      } else {
        setCartProducts((prevState) => {
          return [...prevState, newPrd];
        });
      }
      resetProductQuantities();
    }
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const quantityAddedArray = data.map((product) => {
          return (product = { ...product, quantity: 0 });
        });
        setProducts(quantityAddedArray);
        setIsFetched(true);
      });
  }, []);
  return (
    <Router>
      <Header cartProducts={cartProducts} />
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
                products={products}
                addToCart={addToCart}
                isFetched={isFetched}
              />
            );
          }}
        />
        <Route
          exact
          path="/shop"
          render={(props) => {
            return <Shop {...props} products={products} />;
          }}
        />
        <Route
          path="/cart"
          render={(props) => {
            return (
              <Cart
                {...props}
                cartProducts={cartProducts}
                isFetched={isFetched}
                incrementQuantityOfCartProduct={incrementQuantityOfCartProduct}
                decrementQuantityOfCartProduct={decrementQuantityOfCartProduct}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
