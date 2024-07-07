import React from "react";
import "./AboutPage.css";
import profilePic from "../../img/chandra4.png";

const AboutPage = () => {
  return (
    <>
      <div className="about" id="abt">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src={profilePic}
              alt="profile_pic"
              className="profile-pic"
            ></img>
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>ABOUT ME</h1>
            <p>
              Hello! I'm Chandra Prakash, a passionate and dedicated software
              developer with a focus on full-stack development. With a keen
              interest in building robust and user-friendly applications, I
              thrive on solving complex problems and delivering high-quality
              solutions. I am Pursuing Bachelor of Technology(B.Tech) From
              I.K.Gujral Punjab Technical University Main Campus Jalandhar
              Punjab, and I have 4 months of experience as Teaching Assistant in
              Coding Ninjas.My expertise lies in the MERN stack (MongoDB,
              Express.js, React, and Node.js), and I have a solid understanding
              of front-end and back-end development. In addition to my expertise
              in web development, I also have hands-on experience with React
              Native, enabling me to build high-quality mobile applications for
              both iOS and Android platforms.I believe in writing clean,
              maintainable code and am always on the lookout for new
              technologies and best practices to incorporate into my
              work.Currently, I am working on a E-Commerse application using the
              MERN stack. My goal is to continually enhance my skills in
              full-stack development, explore new frameworks, and contribute to
              open-source projects.Thank you for visiting my portfolio! If you
              have any questions or would like to collaborate on a project, feel
              free to reach out to me. I'm always excited to connect with fellow
              tech enthusiasts and explore new opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
