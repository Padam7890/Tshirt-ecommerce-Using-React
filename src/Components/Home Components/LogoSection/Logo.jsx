import React from "react";


import "./Logo.css"
import LogoImages from "../../Global Components/Logos/LogoImages";
const Logo = () => {


  return (
    <section id="logo section">
      <div className="logo__container container  grid">
        <div className="logo__description">
          <p className="logo__content">
            “We've got custom T-shirts in a range of fits and sizes, so everyone
            can wear your brand or message.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Logo;
