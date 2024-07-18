import React from "react";
import "./ProjectPage.css";
const ProjectPage = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          I just blank this thing so i write this when I complete some project
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnKb5dCzEQl5jiA9BCYSJxZO0n4p70_TOXA&s"
                  alt="Project1"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-details-badge">React Js</span>
                <span className="card-details-badge">Node Js</span>
                <span className="card-details-badge">Express</span>
                <span className="card-details-badge">MongoDB</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Techstore Website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://techstore-aiio.onrender.com/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnKb5dCzEQl5jiA9BCYSJxZO0n4p70_TOXA&s"
                  alt="Project2"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-details-badge">React Js</span>
                <span className="card-details-badge">Node Js</span>
                <span className="card-details-badge">Express</span>
                <span className="card-details-badge">MongoDB</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Doctor Appointment website</h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Mobile App</span>
                <img
                  src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
                  alt="Project3"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-details-badge">React Native</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Android App</h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
