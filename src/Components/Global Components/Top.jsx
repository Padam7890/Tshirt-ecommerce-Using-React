import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <div className="top__nav">
      <div className="top__navbar">
        <div className="top__message">
          <h2> Free shipping on all U.S. orders $50+</h2>
        </div>
        <div className="shop__now_btn">
          <button className="top__shop_btn button">Shop Now</button>
        </div>
      </div>
      <div className="close__icons">
      <i class="ri-close-line"></i>
      </div>
    </div>
  );
};

export default Top;
