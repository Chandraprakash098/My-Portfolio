import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaSchool } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import './EducationPage.css'
const EducationPage = () => {
  return (
    <>
      <div className="education" id='edu'>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "gray", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
            date=""
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">Advance Diploma in Computer Application</h3>
            <h4 className="vertical-timeline-element-subtitle">
              NSUI
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "gray", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
            date="2021-2025"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              I.K.Gujral Punjab Technical University
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default EducationPage