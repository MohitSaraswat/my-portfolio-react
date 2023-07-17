import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkOutline } from "react-icons/md";
import { BsBook } from "react-icons/bs";


const Experience = () => {
  const experience = [
    {
      date: '2022 - Present',
      icon: 'office',
      title: 'Citi Bank',
      location: 'Pune, India',
      description: 'Helped the team launch 2 major features.'
    },
    {
      date: '2020 - 2022',
      icon: 'office',
      title: 'Deutsche Bank',
      location: 'Pune, India',
      description: 'UI Lead and Frontend Engineer for same two projects of HCL.'
    },
    {
      date: '2018 - 2020',
      icon: 'office',
      title: 'HCL Technologies',
      location: 'Pune, India',
      description: 'UI Lead and Frontend Engineer for two projects.'
    },
    {
      date: '2017 - 2018',
      icon: 'office',
      title: 'Infosys',
      location: 'Pune, India',
      description: 'Frontend Developer for telecom client.'
    },
    {
      date: '2015 - 2017',
      icon: 'office',
      title: 'NTT Data (Formerly Dell International Services)',
      location: 'Bengaluru, India',
      description: 'Worked on many small projects and explored many technologies and tools.'
    },
    {
      date: '2011 - 2015',
      icon: 'college',
      title: 'G.L. BAJAJ',
      location: 'Mathura, India',
      description: 'B.Tech (CSE)'
    }
  ]
  return (
    <div
      name="experience"
      className="pt-20 lg:pt-28 px-8 lg:px-40 w-full h-full text-white"
    >
      <div className="">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline red-border">
            Experience
          </p>
        </div>
          <p className="text-xl mt-4 pb-12">These are the organizations I've worked with</p>

        <div className="w-full flex justify-center text-center">
          <VerticalTimeline lineColor="#f65555">
            {experience && experience.map(({date, icon, title, location, description}) => (
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={date}
                        iconStyle={{ background: "#f65555", color: "#fff" }}
                        icon={icon === 'office' ? <MdWorkOutline /> : <BsBook /> }
                      >
                        <h3 className="vertical-timeline-element-title">
                        {title}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                          {location}
                        </h4>
                        <p>
                          {description}
                        </p>
                      </VerticalTimelineElement>            
            ))
            }
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;