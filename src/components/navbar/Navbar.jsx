import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { FaBriefcase, FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <motion.a 
            href="#" 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h2>
              <span>Kamoliddin</span>.dev
            </h2>
          </motion.a>
          <div className="navLinks">
            {["Home", "About", "Portfolio", "Skills", "Contact"].map((item, index) => (
              <motion.a 
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}${item === "About" ? "Section" : ""}`}
                className="a"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.1, color: "#6468f9" }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="navBtns">
            {[
              { href: "https://github.com/Kamoliddinmirzaboyev05", icon: <LuGithub />, tooltip: "Github" },
              { href: "https://t.me/MKPortfolio_Codial", icon: <FaBriefcase />, tooltip: "Portfolio" },
              { href: "https://www.linkedin.com/in/kamoliddin-mirzaboyev-8226a4329/", icon: <FiLinkedin />, tooltip: "Linkedin" },
              { href: "https://t.me/Kamoliddin_Mirzaboyev", icon: <FaTelegramPlane />, tooltip: "Telegram" }
            ].map((btn, index) => (
              <motion.a
                key={index}
                href={btn.href}
                target="blank"
                className="tooltip-wrapper"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <button className="navBtn">
                  {btn.icon}
                  <div className="tooltip">
                    {btn.tooltip} <span className="tooltip-arrow"></span>
                  </div>
                </button>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
