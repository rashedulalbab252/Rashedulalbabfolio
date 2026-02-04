import React, { createRef } from "react";
import { Fade } from "react-reveal";
import "./ExperienceCard.scss";

export default function ExperienceCard({ cardInfo, isDark, sectionName }) {
  const imgRef = createRef();

  const isIndustrial = sectionName?.toLowerCase().includes("industrial");
  const isResearch = sectionName?.toLowerCase().includes("research");
  const isTeaching = sectionName?.toLowerCase().includes("teaching");
  const isProfessional = sectionName?.toLowerCase().includes("professional");

  const cardClass = [
    "experience-card",
    isDark ? "dark-mode" : "",
    isIndustrial ? "industrial-card" : "",
    isResearch ? "research-card" : "",
    isTeaching ? "teaching-card" : "",
    isProfessional ? "professional-card" : ""
  ].join(" ");

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
        <li key={i} className="subTitle">
          {item}
        </li>
      ))
      : null;
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={cardClass}>
        <div className="experience-card-header">
          {cardInfo.companylogo && (
            <div className="experience-card-logo">
              {cardInfo.companyWebsite ? (
                <a
                  href={cardInfo.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    crossOrigin={"anonymous"}
                    ref={imgRef}
                    src={cardInfo.companylogo}
                    alt={cardInfo.company}
                  />
                </a>
              ) : (
                <img
                  crossOrigin={"anonymous"}
                  ref={imgRef}
                  src={cardInfo.companylogo}
                  alt={cardInfo.company}
                />
              )}
            </div>
          )}
          <div className="experience-card-title-group">
            <h5 className={isDark ? "dark-mode experience-role" : "experience-role"}>
              {cardInfo.role}
            </h5>
            {cardInfo.companyWebsite ? (
              <a
                href={cardInfo.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-company-link"
              >
                <h6 className={isDark ? "dark-mode experience-company" : "experience-company"}>
                  {cardInfo.company}
                </h6>
              </a>
            ) : (
              <h6 className={isDark ? "dark-mode experience-company" : "experience-company"}>
                {cardInfo.company}
              </h6>
            )}
            <p className={isDark ? "dark-mode experience-duration" : "experience-duration"}>
              {cardInfo.date}
            </p>
          </div>
        </div>

        <div className="experience-card-body">
          <p className={isDark ? "dark-mode experience-desc" : "experience-desc"}>
            {cardInfo.desc}
          </p>
          <div className="experience-bullets">
            <ul>
              <GetDescBullets descBullets={cardInfo.descBullets} />
            </ul>
          </div>
        </div>

        {/* Decorative element */}
        <div className="experience-card-accent"></div>
      </div>
    </Fade>
  );
}
