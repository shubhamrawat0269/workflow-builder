import React from "react";

const HeroSection = () => {
  return (
    <div className="primary-bg section">
      <div className="container">
        <h1 className="flex flex-col">
          <span className="highlighted-text">Platform For</span>
          <span className="white-text">Workflows</span>
        </h1>

        <h2>
          CodeSandbox gives you 24/7 collaborative cloud development
          environments (CDEs) that resume in 2 seconds.
        </h2>

        <button className="start-free-btn mt-12">Start For Free</button>
      </div>
    </div>
  );
};

export default HeroSection;
