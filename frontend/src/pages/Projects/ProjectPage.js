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
        {/* <p className="pb-3 text-center">
          I have developed a Techstore website using the MERN stack, which
          includes features for browsing and purchasing electronic products such
          as laptops and mobiles. The website provides a seamless shopping
          experience with functionalities like product filtering, search, and a
          shopping cart integrated with Braintree for payment processing.
          Additionally, I have created a Jail Management System specifically for
          the superintendent of a jail. This system, also built with the MERN
          stack, includes modules for managing prisoners, visitations, incident
          reporting, and generating reports and analytics. The application
          ensures secure access and data management, allowing the superintendent
          to efficiently oversee and maintain prison operations.
        </p> */}
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
                <span className="card-details-badge">React</span>
                <span className="card-details-badge">Node js</span>
                <span className="card-details-badge">Express js</span>
                <span className="card-details-badge">MongoDB</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Smart Service and Utility System{" "}
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://smart-service-system.onrender.com/"
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
                <span className="card-details-badge">React</span>
                <span className="card-details-badge">Node js</span>
                <span className="card-details-badge">Express js</span>
                <span className="card-details-badge">MongoDB</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Detention Center Management
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://jail-management.onrender.com"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">NextJS</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnKb5dCzEQl5jiA9BCYSJxZO0n4p70_TOXA&s"
                  alt="Project3"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-details-badge">Next js</span>
                <span className="card-details-badge">MongoDB</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    personalized-news-aggregator
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://personalized-news-aggregator-three.vercel.app"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          {/* 4th */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Django</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnKb5dCzEQl5jiA9BCYSJxZO0n4p70_TOXA&s"
                  alt="Project2"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-details-badge">HTML</span>
                <span className="card-details-badge">CSS</span>
                <span className="card-details-badge">Django</span>
                <span className="card-details-badge">Sqlite</span>
              </div>
              <div className="card-body">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">StudyLoom</h5>
                </div>
                <a className="ad-btn" href="https://studyloom.onrender.com">
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
