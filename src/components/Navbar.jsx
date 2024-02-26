import React, { useState } from "react";
import { FaHome, FaImages } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({setNavSelected}) => {
    const [navClassName, setNavClassName] = useState("navbar-left");
    
  return (
    <div className="navbar">
      <div className={navClassName}>
        <div className="nav-icon" onClick={() => setNavSelected("home")}>
          <FaHome />
          <p>Home</p>
        </div>
        <div
          className="nav-icon"
          onClick={() => setNavSelected("gallery")}
        >
          <FaImages />
          <p>Gallery</p>
        </div>
        <div
          className="nav-icon"
          onClick={() => setNavSelected("contact")}
        >
          <IoMdMail />
          <p>Contact</p>
        </div>
        <div className="nav-icon" onClick={() => setNavSelected("about")}>
          <FaCircleInfo />
          <p>About</p>
        </div>
      </div>
      <div className="nav-icon hamberger">
        <GiHamburgerMenu
          onClick={() => {
            setNavClassName((prev) => {
              return prev == "mobile-view" ? "navbar-left" : "mobile-view";
            });
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
