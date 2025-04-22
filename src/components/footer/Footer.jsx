import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaBriefcase, FaTelegramPlane } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="logo">
            <h2><span>Kamoliddin</span>.dev</h2>
            <p className="footerCopy">© 2025 All rights reserved.</p>
          </div>
          <div className="navLinks">
            <a href="#" className="a">
              Home
            </a>
            <a href="#about" className="a">
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
            <button className="navBtn">
              <LuGithub />
            </button>
            <button className="navBtn">
              <FaBriefcase />
            </button>
            <button className="navBtn">
              <FiLinkedin />
            </button>
            <button className="navBtn">
              <FaTelegramPlane />
            </button>
          </div>
        </div>
        <div className="container">
          <p className="powered">Powered by Kamoliddin Mirzaboyev</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
