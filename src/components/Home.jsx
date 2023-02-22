import React from "react";
import "../css/home.css";

function Home({ products, addToCart }) {
  return (
    <div className="home-container">
      <div className="wrapper">
        <div className="home-product-content">
          {products.map((item) => {
            return (
              <div className="home-product-card" key={item.id}>
                <img src={item.image} alt="" />
                <div className="price-name-content">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p>$ {item.price}</p>
                  <div className="button-container">
                    <button
                      onClick={() => addToCart(item)}
                      className="add-button"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
