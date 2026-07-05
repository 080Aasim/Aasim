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
          {({ isActive }) =>
            isActive ? <CanvasTextDemo text="Home" /> : <span>Home</span>
          }
        </NavLink>
        <NavLink to="/Projects" className="link" reloadDocument>
          {({ isActive }) =>
            isActive ? (
              <CanvasTextDemo text="Projects" />
            ) : (
              <span>Projects</span>
            )
          }
        </NavLink>
        <NavLink to="/About" className="link" reloadDocument>
          {({ isActive }) =>
            isActive ? <CanvasTextDemo text="About" /> : <span>About</span>
          }
        </NavLink>
        {token && user ? (
          user
        ) : (
          <NavLink to="/sign-up" className="link" reloadDocument>
            {({ isActive }) =>
              isActive ? <CanvasTextDemo text="Signup" /> : <span>Signup</span>
            }
          </NavLink>
        )}
      </div>
      <div className="right">
        {token && user ? (
          <NavLink className="nlink" to="login" onClick={logout}>
            Logout
          </NavLink>
        ) : (
          <NavLink className="nlink" to="login">
            {({ isActive }) =>
              isActive ? <CanvasTextDemo text="Login" /> : <span>Login</span>
            }
          </NavLink>
        )}

        <NavLink className="nlink" to="https://x.com/VanitasO8" target="_blank">
          Twitter
        </NavLink>
        <NavLink
          className="nlink"
          to="https://www.linkedin.com/in/aasim-akhtar-290b861a0/"
          target="_blank"
        >
          LinkedIn
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
