import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import "./Header.css";

const Header = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  const [showMenu, setShowMenu] = useState();
  const [isHeaderShadowed, setIsHeaderShadowed] = useState(false);
  const [isScrollUp, setisScrollUp] = useState(false);

  const scrollHeader = () => {
    setIsHeaderShadowed(window.scrollY >= 50);
  };

  const scrollUp = () => {
    setisScrollUp(window.scrollY >= 350);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    window.addEventListener("scroll", scrollUp);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  function MenuShowHide() {
    setShowMenu(!showMenu);
  }
  const nav = [
    {
      name: "Home",
      link: "#Home",
    },
    {
      name: "TeeSpace",
      link: "#About",
    },
    {
      name: "Shop",
      link: "#Blog",
    },
    {
      name: "Blog",
      link: "#Blog",
    },
    {
      name: "Pages",
      link: "#Pages",
    },
  ];

  return (
    <header>
      <div className="header" id="header">
        <div className="logo">
          <a href="https://vitejs.dev" target="_blank">
            <img src={logo} className="logo" alt="Vite logo" />
          </a>
        </div>
        <nav className={`navbar ${showMenu ? "show-menu" : ""}`}>
          <ul className="nav__items">
            {nav.map((item) => (
              <li className="nav__item">
                <a href={item.link} target="_blank">
                  {item.name}
                </a>
                <div className="icon">
                  <i class="ri-arrow-down-s-line"></i>
                </div>
              </li>
            ))}
          </ul>
          {/* close button */}
          <div onClick={MenuShowHide} className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </nav>
        {/* Toogle Button */}
        <div onClick={MenuShowHide} className="nav__toggle" id="nav-toggle">
          <i className="ri-menu-4-line"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
