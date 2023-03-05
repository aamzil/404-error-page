import React from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const [mobileNav, HandlemobileNav] = useState(false);
  const [ScrollBackground, SetScrollBackground] = useState(false);

  // Function to target burger icon click on mobile screen
  const HandleClick = () => {
    HandlemobileNav(!mobileNav);
  };

  // Add background color on scroll
  const HandleBg = () => {
    if (window.scrollY > 10) {
      SetScrollBackground(true);
    } else {
      SetScrollBackground(false);
    }
  };

  // EventListener to target scroll on mount & removing EventListner for better app performance
  useEffect(() => {
    window.addEventListener("scroll", HandleBg);
    return () => window.removeEventListener("scroll", HandleBg);
  }, []);

  return (
    <div className="navbar" style={{ background: ScrollBackground && "#ccc" }}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href="">NOTFOUND.</a>
        </div>

        <div className="navbar__links">
          <a href="">Home</a>
          <a href="">Discover</a>
          <a href="">Services</a>
          <a href="">Contact</a>
        </div>

        <FiMenu onClick={HandleClick} className="navbar__burger" />
      </div>

      {/* Mobile navbar */}
      <div
        className={mobileNav ? `navbar__links-mobile` : `navbar__links-display`}
      >
        <a href="">Home</a>
        <a href="">Discover</a>
        <a href="">Services</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
