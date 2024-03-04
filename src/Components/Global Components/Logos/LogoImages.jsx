import React from 'react'
import './Logo.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import feedly from "../../../assets/img/Logos/feedly.png";
import hopin from "../../../assets/img/Logos/hopin.png";
import lattience from "../../../assets/img/Logos/lattience.png";
import spotify from "../../../assets/img/Logos/soptify.png";
import upwork from "../../../assets/img/Logos/upwork.png";

const LogoImages = () => {
    var settings = {
        infinite: true,
        speed: 4000,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"      };
  return (
    <div className="mainContainer">
    <Slider {...settings}>
      <div className="container">
        <img src={feedly} />
      </div>
      <div className="container">
        <img src={hopin} />
      </div>
      <div className="container">
        <img src={lattience} />
      </div>
      <div className="container">
        <img src={spotify} />
      </div>
      <div className="container">
        <img src={upwork} />
      </div>
    </Slider>
  </div>
  )
}

export default LogoImages