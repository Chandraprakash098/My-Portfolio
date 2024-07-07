import React from "react";
import { Link } from "react-scroll";
import "./MenuItems.css";
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
import profilePic from "../../img/chandra4.png";
const MenuItems = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={profilePic} alt="Profile img"></img>
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
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
                >
                  <FcContacts />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="abt"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="edu"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReading />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="tech"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="wrk"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="cnt"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcContacts />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MenuItems;
