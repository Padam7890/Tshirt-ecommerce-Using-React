import React from "react";
import BringPic from "../../../assets/img/bring.png";

import "./Bring.css";
import Button from "../../Reusable Components/Button";

function Bring() {
  return (
    <section className="Bring_shirt section" id="home">
      <div className="Bring_container container grid">
        <div className="image__container">
          <img src={BringPic} alt="Bring" className="Bring_image" />
        </div>
        <div className="bring__content">
          <h2>Free and easy way to bring your ideas to life</h2>
          <p>
            Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
            adipiscing eliet, cowec tetopak
          </p>

         <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
}

export default Bring;
