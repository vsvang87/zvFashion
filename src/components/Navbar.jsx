import React from "react";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

function Navbar({ cartItems }) {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="links">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/hmongclothes" className="links">
              Hmong Clothes
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="links">
              <FontAwesomeIcon icon={faShoppingCart} className="cart" />
              <span className="cart-quantity">
                {cartItems.length === 0 ? "0" : cartItems.length}
              </span>
            </NavLink>
          </li>
        </ul>
        <div className="logo-container">
          <h2>
            <Link to="/" className="logo-link">
              Z.V Fashions
            </Link>
          </h2>
        </div>
        <div className="sign-up-container">
          <ul>
            <li>
              <NavLink to="/contact" className="links">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
