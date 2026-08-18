import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <button className="btn" onClick={scrollToTop}>ऊपर जाएँ</button>
      <div className="dlink">
        <NavLink className="flink" to="https://x.com/VanitasO8" target="_blank">
          ट्विटर
        </NavLink>
        <NavLink
          className="flink"
          to="https://www.linkedin.com/feed/"
          target="_blank"
        >
          लिंक्डइन
        </NavLink>
        <NavLink className="flink" to="mailto:aasim9155@gmail.com">aasim9155@gmail.com</NavLink>
      </div>
    </div>
  );
}

export default Footer;
