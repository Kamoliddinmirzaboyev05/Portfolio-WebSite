import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { FaBriefcase, FaTelegramPlane } from "react-icons/fa";
function Navbar() {
  return (
    <div>
      <nav>
        <div className="container">
          <a href="#" className="logo">
            <h2>
              <span>Kamoliddin</span>.dev
            </h2>
          </a>
          <div className="navLinks">
            <a href="#" className="a">
              Home
            </a>
            <a href="#aboutSection" className="a">
              About
            </a>
            <a href="#portfolio" className="a">
              Portfolio
            </a>
            <a href="#skills" className="a">
              Skills
            </a>
            <a href="#contact" className="a">
              Contact
            </a>
          </div>
          <div className="navBtns">
            <a
              href="https://github.com/Kamoliddinmirzaboyev05"
              target="blank"
              className="tooltip-wrapper"
            >
              <button className="navBtn">
                <LuGithub />
                <div class="tooltip">
                  Github <span class="tooltip-arrow"></span>
                </div>
              </button>
            </a>
            <a
              href="https://t.me/MKPortfolio_Codial"
              target="blank"
              className="tooltip-wrapper"
            >
              <button className="navBtn">
                <FaBriefcase />
                <div class="tooltip">
                  Portfolio <span class="tooltip-arrow"></span>
                </div>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/kamoliddin-mirzaboyev-8226a4329/"
              target="blank"
              className="tooltip-wrapper"
            >
              <button className="navBtn">
                <FiLinkedin />
                <div class="tooltip">
                  Linkedin <span class="tooltip-arrow"></span>
                </div>
              </button>
            </a>
            <a href="https://t.me/Kamoliddin_Mirzaboyev" className="tooltip-wrapper">
              <button className="navBtn">
                <FaTelegramPlane />
                <div class="tooltip">
                  Telegram <span class="tooltip-arrow"></span>
                </div>
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
