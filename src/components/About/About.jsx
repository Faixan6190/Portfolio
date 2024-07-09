import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="about_profile" width={"20%"} height={"20%"} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              MERN Stack, a popular full-stack JavaScript framework, consists of MongoDB, Express.js, React, and Node.js. This
              combination allows developers to build scalable, high-performance web applications using a single programming
              language across both the client and server sides.
            </p>
            <p>
              The MERN Stack is a collection of powerful technologies used together to build full-stack JavaScript applications.
              The stack is ideal for creating dynamic and responsive single-page applications.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Mongo DB</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>0</h1>
          <p>NO CLIENT</p>
        </div>
      </div>
    </div>
  );
};

export default About;
