import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { Link } from "react-router-dom";
import {
  greeting
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);


  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/#greeting" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="/#greeting">Home</a>
          </li>
          <li>
            <a href="/#education">Education</a>
          </li>
          <li>
            <a href="/#research">Research</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#experience">Experiences</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <div>
              <ToggleSwitch />
            </div>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
