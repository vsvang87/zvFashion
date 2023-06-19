import React from "react";

function Accessories() {
  return (
    <div className="accessory-container">
      <div className="wrapper">
        <div className="title-container">
          <h1>Accessories</h1>
        </div>
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

export default Accessories;
