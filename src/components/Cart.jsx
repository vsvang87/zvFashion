import React from "react";
import "../css/cart.css";

function Cart({ removeItem, cartItems, addToCart }) {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-component-container">
      <div className="wrapper">
        <div className="cart-content">
          <h1>Cart</h1>
          {cartItems.length === 0 && (
            <div className="cart-items-empty">Cart is empty</div>
          )}
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-items-list">
                <img src={item.image} alt="" className="cart-item-image" />
                <p>{item.name}</p>

                <div className="cart-button-container col">
                  <button
                    onClick={() => addToCart(item)}
                    className="increase-button btn"
                  >
                    +
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => removeItem(item)}
                    className="decrease-button btn"
                  >
                    -
                  </button>
                </div>
                <div col>$ {item.price}</div>
              </div>
            ))}
            <div className="cart-items-total">Total Price: $ {totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
