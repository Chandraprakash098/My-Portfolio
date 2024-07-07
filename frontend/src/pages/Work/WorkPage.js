import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaNetworkWired } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import './WorkPage.css'
const WorkPage = () => {
  return (
    <>
      <div className=" work" id='wrk'>
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work-Experience
          </h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "orange", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="Dec2023-march2024"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaNetworkWired />}
            >
              <h3 className="vertical-timeline-element-title">
                Teaching Assistant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Coding Ninjas
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default WorkPage