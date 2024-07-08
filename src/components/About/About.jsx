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
          <img src={about_profile} alt="about_profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              MERN Stack, a popular full-stack JavaScript framework, consists of MongoDB, Express.js, React, and Node.js. This
              combination allows developers to build scalable, high-performance web applications using a single programming
              language across both the client and server sides. 
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
