import React from "react";
import "../css/home.css";

function Home({ products, addToCart }) {
  return (
    <div className="home-container">
      <div className="hero-container">
        <div className="wrapper">
          <div className="hero-content">
            <div className="hero-inner">
              <p>
                Come check us out <i class="fa-solid fa-fire"></i>
              </p>
              <h1 className="hero-message">
                We personalized shirts, hoodies, mugs, and many more.
              </h1>
              <p>
                Find out how much it is to personalize a shirt or hoody of your
                choice.
              </p>
              <button className="quote-btn">
                Quote <i class="fa-solid fa-tag"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
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
