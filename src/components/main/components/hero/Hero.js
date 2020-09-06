import "./Hero.scss";
import React from "react";
import HeroCard from "../hero-card/HeroCard";

const Hero = () => {
  return (
    <div className="app-amazon__hero">
      <div className="separator"></div>
      <div className="hero-cards-wrapper">
        <HeroCard></HeroCard>
      </div>
    </div>
  );
};

export default Hero;
