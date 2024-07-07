import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../img/resume.pdf";
import { LuSunMoon } from "react-icons/lu";
import { IoMdSunny } from "react-icons/io";
import "./HomePage.css";
const HomePage = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <LuSunMoon size={30} />
          ) : (
            <IoMdSunny size={30} />
          )}
        </div>
        <div className="conatainer home-content">
          <h2> Hello 👋 I am a </h2>
          <h1>
            <Typewriter
              options={{
                strings: ["MERN Developer", "React native Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=6204421804"
              rel="noreferrer"
              target="_blank"
            >Hire Me</a>
            <a
              className="btn btn-cv"
              href={Resume}
              download="Chandra-Resume.pdf"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
