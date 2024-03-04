import React from "react";
import Top from "../Components/Global Components/Top";
import Header from "../Components/Global Components/Header";
import HeroSection from "../Components/Home Components/HeroSection/HeroSection";
import Logo from "../Components/Home Components/LogoSection/Logo";
import LogoImages from "../Components/Global Components/Logos/LogoImages";
import CustomShirt from "../Components/Home Components/CustomSection/CustomShirt";

const Home = () => {
  return (
    <div>
      {/* <Top/> */}
      <Header />
      <main>
        <HeroSection />
        {/* <Logo/>
        <LogoImages/> */}
        <CustomShirt/>

      </main>
    </div>
  );
};

export default Home;
