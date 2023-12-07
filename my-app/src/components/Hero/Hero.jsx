import React from "react";
import "./Hero.css";
import image1 from "../../images/image1.webp";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="hero__title">Надійний постачальник пиломатеріалів</h1>
    </section>
  );
};
export default Hero;
