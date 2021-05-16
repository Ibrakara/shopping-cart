import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const numberOfCartProducts = props.cartProducts.length;
  return (
    <nav>
      <Link to="/">
        <img
          src="https://image.flaticon.com/icons/png/512/79/79802.png"
          width="50"
          alt="logo"
        />
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>
            <div>
              <p>Cart</p>
              {numberOfCartProducts}
              <img
                src="https://img.icons8.com/pastel-glyph/2x/fast-cart.png"
                alt="cart"
                width="40"
              />
            </div>{" "}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
