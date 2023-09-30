// import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
// import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          {/* <img src={images.logo} /> */}
          <p className="app_navbar-logo-name">GOBINDA SAHA</p>
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "work", "skills", "testimonial", "contact"].map(
            (item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
        </ul>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [250, 0] }}
              tramsition={{ duration: 0.35, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {[
                  "home",
                  "about",
                  "work",
                  "skills",
                  "testimonial",
                  "contact",
                ].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
