import React from "react";
import './jobs.css';
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <h1 className="hero-title">Find Jobs</h1>
        <div className="breadcrumb">
          <span>Home</span>
          <span className="separator">/</span>
          <span className="current">Jobs</span>
        </div>
      </div>
    </>
  );
};

export default Hero;
