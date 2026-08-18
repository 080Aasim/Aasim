import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { PortfolioContext } from "../context/Portfolio";
import { CanvasTextDemo } from "@/context/CanvasTextDemo";

function Navigation() {
  const { user, token, logout } = useContext(PortfolioContext);

  return (
    <div className="main">
      <div className="left">
        <NavLink to="/" className="link" reloadDocument>
          {({ isActive }) => isActive ? <CanvasTextDemo text="मुखपृष्ठ" /> : <span>मुखपृष्ठ</span>}
        </NavLink>
        <NavLink to="/Projects" className="link" reloadDocument>
          {({ isActive }) => isActive ? <CanvasTextDemo text="परियोजनाएँ" /> : <span>परियोजनाएँ</span>}
        </NavLink>
        <NavLink to="/About" className="link" reloadDocument>
          {({ isActive }) => isActive ? <CanvasTextDemo text="परिचय" /> : <span>परिचय</span>}
        </NavLink>
        {token && user ? (
          user
        ) : (
          <NavLink to="/sign-up" className="link" reloadDocument>
            {({ isActive }) => isActive ? <CanvasTextDemo text="पंजीकरण" /> : <span>पंजीकरण</span>}
          </NavLink>
        )}
      </div>

      <div className="right">
        {token && user ? (
          <NavLink className="nlink" to="login" onClick={logout}>लॉग आउट</NavLink>
        ) : (
          <NavLink className="nlink" to="login">
            {({ isActive }) => isActive ? <CanvasTextDemo text="लॉग इन" /> : <span>लॉग इन</span>}
          </NavLink>
        )}
        <NavLink className="nlink" to="https://x.com/VanitasO8" target="_blank">ट्विटर</NavLink>
        <NavLink className="nlink" to="https://www.linkedin.com/in/aasim-akhtar-290b861a0/" target="_blank">लिंक्डइन</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
