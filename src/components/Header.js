import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const numberOfCartProducts = props.cartProducts.length;
  return (
    <nav>
      <img
        src="https://icons.iconarchive.com/icons/sinerjimedia/turkish-football-club/256/fenerbahce-sk-icon.png"
        width="50"
        alt="logo"
      />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>Cart {numberOfCartProducts}</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
