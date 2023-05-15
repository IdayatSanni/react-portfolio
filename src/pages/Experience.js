import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoIosSchool } from "react-icons/io";
import { MdWorkHistory } from "react-icons/md";
import Navbar from "../components/Navbar";

function Experience() {
  return (
    <div className="experience">
      <Navbar />
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<IoIosSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Development Course
          </h3>
          <p> SheCodes Organization</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<IoIosSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            FrontEnd Development
          </h3>

          <p> Black Girls in Tech</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWorkHistory />}
        >
          <h3 className="vertical-timeline-element-title">
            FrontEnd Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Women Who Code, London
          </h4>
          <p>Developed and Maintained the webpage</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
