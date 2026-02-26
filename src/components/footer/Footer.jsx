import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaBriefcase, FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div>
      <footer>
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2><span>Kamoliddin</span>.dev</h2>
            <p className="footerCopy">© 2025 All rights reserved.</p>
          </motion.div>
          <motion.div 
            className="navLinks"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {["Home", "About", "Portfolio", "Skills", "Contact"].map((item, index) => (
              <motion.a 
                key={item}
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="a"
                whileHover={{ scale: 1.1, color: "#6468f9" }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
          <motion.div 
            className="navBtns"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[<LuGithub />, <FaBriefcase />, <FiLinkedin />, <FaTelegramPlane />].map((icon, index) => (
              <motion.button 
                key={index}
                className="navBtn"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className="container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="powered">Powered by Kamoliddin Mirzaboyev</p>
        </motion.div>
      </footer>
    </div>
  );
}

export default Footer;
