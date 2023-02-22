import React from "react";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

function Navbar({ cartItems }) {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo-container">
          <h2>
            <Link to="/" className="logo-link">
              Z.V Fashions
            </Link>
          </h2>
        </div>
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
            <NavLink to="/contact" className="links">
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink to="/cart" className="links">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-quantity">
                {cartItems.length === 0 ? "0" : cartItems.length}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
