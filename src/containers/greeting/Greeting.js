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
                I am an <span className="highlight">AI researcher and PhD applicant</span> specializing in theoretically grounded, <span className="highlight">multimodal architectures</span>. Leveraging a foundation in <span className="highlight">Electrical and Electronic Engineering</span>, my work combines <span className="highlight">Machine Learning, Computer Vision, NLP, and Deep Learning</span> to tackle complex challenges in <span className="highlight">Healthcare, Renewable Energy, and Smart Power Systems</span>. By integrating physics-informed modeling into <span className="highlight-alt">Generative AI and RF/Electromagnetic systems</span>, I develop <span className="highlight-alt">robust, scalable AI solutions</span> that bridge rigorous academic theory with <span className="highlight-alt">transformative engineering applications</span>.
              </p>

              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={`${process.env.PUBLIC_URL}/cv_of_Rashedul_Albab.pdf`}
                    download="cv_of_Rashedul_Albab.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="main-button"
                  >
                    Download my CV
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
