import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import PROFILE from "../../assets/Profile.jpg";

const Hero = () => {
  return (
    <div className="hero">
      {/* <img src={profile_img} alt="profile_img" /> */}
      <img src={PROFILE} alt="profile_img" />
      <h1>
        <span>I'm Faizan Ahmed,</span> MERN stack developer based in Karachi.
      </h1>
      <p>Proficient in developing full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js).</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
