import React, { useState } from "react";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReading,
  FcVideoProjector,
  FcBusinessman,
  FcContacts,
} from "react-icons/fc";
import { Link } from "react-scroll";
import { RiMenuAddFill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import "./MobileNav.css";
const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuClick=()=>{
    setOpen(false)
  }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <RiMenuAddFill
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <TiThMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="abt"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="edu"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcReading />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBiotech />
                    Tech Skills
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="wrk"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcPortraitMode />
                    Work Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="cnt"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcContacts />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
