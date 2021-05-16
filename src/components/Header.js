import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = (props) => {
  const numberOfCartProducts = props.cartProducts.length;
  return (
    <nav className="header">
      <Link to="/">
        <img
          id="logo"
          src="https://seeklogo.com/images/O/online-shopping-logo-365B76F5DC-seeklogo.com.png"
          width="50"
          alt="logo"
        />
      </Link>
      <ul className="nav-links">
        <Link className="nav-link" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-link" to="/shop">
          <li>Shop</li>
        </Link>
        <Link className="nav-link" to="/cart">
          <li id="cart-list-item">
            <p>{numberOfCartProducts}</p>
            <img
              id="cart-img"
              src="https://img.icons8.com/pastel-glyph/2x/fast-cart.png"
              alt="cart"
              width="40"
            />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
