import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";

import Home from "./components/Home";
import Contact from "./components/Contact";
import HmongClothes from "./components/HmongClothes";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import data from "./components/data.js";
import hmongClothesData from "./components/hmongClothesData.js";

//
function App() {
  const { products } = data;
  const { hmongClothes } = hmongClothesData;
  const [cartItems, setCartItems] = useState([]);
  //add to item to cart
  const addToCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map(
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  //remove item from cart
  const removeItem = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  //increase cart number count

  return (
    <div className="main-container">
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home products={products} addToCart={addToCart} />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/hmongclothes"
          element={
            <HmongClothes hmongClothes={hmongClothes} addToCart={addToCart} />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              removeItem={removeItem}
              addToCart={addToCart}
              cartItems={cartItems}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
