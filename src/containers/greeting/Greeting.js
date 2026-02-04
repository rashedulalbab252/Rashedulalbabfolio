import React, { useContext } from "react";
import { Fade } from "react-reveal";

import "./Greeting.scss";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                Hi all, I'm{" "}
                <span className="name-gradient">Rashed</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                <span className="highlight">AI Researcher & prospective PhD student</span> with a strong foundation in Electrical and Electronic Engineering (EEE). My research centers on <span className="highlight">physics-informed and multimodal artificial intelligence</span>, synergizing <span className="highlight">Computer Vision</span>, <span className="highlight">Natural Language Processing</span>, and <span className="highlight">Generative AI</span> to model complex real-world systems. I am driven to develop theoretically grounded, generalizable architectures that respect physical and signal-level constraints. Targeting high-impact applications in <span className="highlight-alt">Healthcare</span>, <span className="highlight-alt">Renewable Energy</span>, and <span className="highlight-alt">Electromagnetic systems using AI</span>, my work aims to bridge the gap between rigorous academic theory and <span className="highlight-alt">robust, scalable engineering deployment</span>.
              </p>

              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href="/cv_of_Rashedul_Albab.pdf"
                    download="cv_of_Rashedul_Albab.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="main-button"
                  >
                    Download my resume
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="user-photo-container">
              <img
                alt="Rashed"
                src="/Rashed-removebg.png"
                className="user-photo"
              ></img>
              <div className="photo-bg-blob"></div>
              <div className="photo-bg-circle circle-1"></div>
              <div className="photo-bg-circle circle-2"></div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
