import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
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
                <span className="highlight">AI Researcher & PhD Candidate</span> with an EEE foundation, specializing in the synergy between <span className="highlight">Physics-Informed AI</span> and <span className="highlight">Modern Multimodal Systems</span>.
                My research bridges <span className="highlight">Computer Vision</span>, <span className="highlight">NLP</span>, and <span className="highlight">Behavioral AI</span> to revolutionize <span className="highlight-alt">Healthcare</span>, <span className="highlight-alt">Renewable Energy</span>, and <span className="highlight-alt">AI-Driven Electromagnetic Systems</span>—transforming high-impact theory into <span className="highlight-alt">resilient, real-world engineering solutions</span>.
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
