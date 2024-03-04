import React from "react";
import "./CustomShirt.css";

import main_1 from "../../../assets/img/Main-1.png";
const CustomShirt = () => {
  return (
    <section className="custom_shirt section" id="home">
      <div className="Custom_container container grid">
        <div className="custom__header">
          <h2>How to create custom shirts</h2>
          <p>
            Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
            adipiscing eliet, cowec tetopak ec tetur duis necgi
          </p>
        </div>
        <div className="main__content">
          <div className="first__item">
            <div className="image">
              <img src={main_1} alt="" />
            </div>
              <div className="circle_icon">1</div>
            <div className="info__details">
              <h3 className="header__detail">Add your shirt design</h3>
              <p className="paragraph__detail">
                Lorem ipsum det, cowec tetur duis nec fringi det, consec t
                eturlagix adipiscing eliet, cowec tetopak nec fringi det
                adipiscing
              </p>
            </div>
          </div>
          <div className="first__item">
            <div className="image">
              <img src={main_1} alt="" />
            </div>
              <div className="circle_icon">2</div>
            <div className="info__details">
              <h3 className="header__detail">Add your shirt design</h3>
              <p className="paragraph__detail">
                Lorem ipsum det, cowec tetur duis nec fringi det, consec t
                eturlagix adipiscing eliet, cowec tetopak nec fringi det
                adipiscing
              </p>
            </div>
          </div>
          <div className="first__item">
            <div className="image">
              <img src={main_1} alt="" />
            </div>
              <div className="circle_icon">3</div>
            <div className="info__details">
              <h3 className="header__detail">Add your shirt design</h3>
              <p className="paragraph__detail">
                Lorem ipsum det, cowec tetur duis nec fringi det, consec t
                eturlagix adipiscing eliet, cowec tetopak nec fringi det
                adipiscing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomShirt;
