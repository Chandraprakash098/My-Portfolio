import React, { useState } from "react";
import HomePage from "../../pages/Home/HomePage";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./Layout.css";
import MenuItems from "../Menu/MenuItems";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? <FaArrowLeft size={30} /> : <FaArrowRight size={30} />}
            </p>
          </div>
          <MenuItems toggle={toggle} />
        </div>
        <div className="container">
          <HomePage />
        </div>
      </div>
    </>
  );
};

export default Layout;
