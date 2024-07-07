import React from "react";
import Layout from "./components/Sidelayout/Layout";
import AboutPage from "./pages/About/AboutPage";
import TechSkills from "./pages/Tech/TechSkills";
import ProjectPage from "./pages/Projects/ProjectPage";
import EducationPage from "./pages/Education/EducationPage";
import WorkPage from "./pages/Work/WorkPage";
import ContactPage from "./pages/Contact/ContactPage";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileViewNav/MobileNav";

const App = () => {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav/>
        <Layout />
        <div className="container">
          <AboutPage />
          <EducationPage />
          <TechSkills />
          <ProjectPage />
          <WorkPage />
          <ContactPage />
        </div>
        <div className="footer pb-3 ms-3">
          <h4 className="text-center">
            Made with 🤷‍♂️Chandra Prakash &copy; 2024
          </h4>
        </div>
      </div>
      <ScrollToTop smooth style={{ backgroundColor: "greenyellow" }} />
    </>
  );
};

export default App;
