import React from "react";
import "./Hero.css";
import heroitem from "../../../assets/img/itemhero.png";
import { motion } from "framer-motion";
import Button from "../../Reusable Components/Button";

const HeroSection = () => {
  const motionProperties = {
    animate: { x: 10, y: 20 },
    transition: {
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 1,
      repeatType: "reverse",
      duration: 2,
      x: { duration: 1 },
    },
  };

  const buttoninfo = [
    {
      name: "Shop Now",
      link: "#",
      icon: "ri-arrow-right-line",
    },
    {
      name: "How We Work",
      link: "#",
      icon: "ri-play-circle-line",
      className: "white-button",
    },
  ];

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <div className="subtitle">
            <button className="light_btn">Create your own </button>
          </div>
          <div className="home__title">
            Make the most of <br />
            Printing
          </div>
          <p className="home__descrption">
            What’s more, we do it right! A full administration printing
            background. Print shirts for yourself or your online business
          </p>
          <div className="buttons">
            {buttoninfo.map((item, index) => (
              <Button key={index} className={item.className}>
                <a href={item.link} target="_blank">
                  {item.name}
                </a>
                <i className={item.icon}></i>
              </Button>
            ))}
          </div>
          <div className="home__footer__description">
            <div className="left__side">
              <p className="title">4K + </p>
              <p className="subtitle">Collections</p>
            </div>
            <div className="line"></div>
            <div className="right__side">
              <p className="title">9K + </p>
              <p className="subtitle">items trusted to deliver</p>
            </div>
          </div>
        </div>
        <div className="home__img">
          <img src={heroitem} alt="" />
          <motion.div {...motionProperties} class="circle-1"></motion.div>
          <motion.div {...motionProperties} class="circle-2"></motion.div>
          <motion.div {...motionProperties} class="circle-3"></motion.div>
          <motion.div {...motionProperties} class="circle-4"></motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
