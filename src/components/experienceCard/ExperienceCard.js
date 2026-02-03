import React, { createRef } from "react";
import { Fade, Slide } from "react-reveal";
import "./ExperienceCard.scss";

export default function ExperienceCard({ cardInfo, isDark }) {
  const imgRef = createRef();

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
    <div>
      <div className={isDark ? "dark-mode experience-card" : "experience-card"}>
        {cardInfo.companylogo && (
          <div className="experience-card-left">
            {cardInfo.companyWebsite ? (
              <a
                href={cardInfo.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  crossOrigin={"anonymous"}
                  ref={imgRef}
                  className="experience-roundedimg"
                  src={cardInfo.companylogo}
                  alt={cardInfo.company}
                />
              </a>
            ) : (
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="experience-roundedimg"
                src={cardInfo.companylogo}
                alt={cardInfo.company}
              />
            )}
          </div>
        )}
        <div className="experience-card-right">
          {cardInfo.companyWebsite ? (
            <a
              href={cardInfo.companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-company-link"
            >
              <h5
                className={
                  isDark
                    ? "dark-mode experience-text-company"
                    : "experience-text-company"
                }
              >
                {cardInfo.company}
              </h5>
            </a>
          ) : (
            <h5
              className={
                isDark
                  ? "dark-mode experience-text-company"
                  : "experience-text-company"
              }
            >
              {cardInfo.company}
            </h5>
          )}

          <div className="experience-text-details">
            <h5
              className={
                isDark
                  ? "dark-mode experience-text-role"
                  : "experience-text-role"
              }
            >
              {cardInfo.role}
            </h5>
            <p
              className={isDark ? "dark-mode experience-text-duration" : "experience-text-duration"}
            >
              {cardInfo.date}
            </p>
            <p className={isDark ? "dark-mode experience-text-desc" : "experience-text-desc"}>{cardInfo.desc}</p>
            <div className="experience-text-bullets">
              <ul>
                <GetDescBullets descBullets={cardInfo.descBullets} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
