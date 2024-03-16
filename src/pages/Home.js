import "../index.css";
import React from "react";
import { Features, Header, HeroSection } from "../components/composer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
    </div>
  );
};

export default Home;
