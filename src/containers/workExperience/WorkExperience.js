import React, { useContext } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div className="experience-main" id="experience">
        <div className={isDark ? "dark-mode experience-container" : "experience-container"} id="workExperience">
          <div className="experience-section-wrapper">
            <h1 className={isDark ? "dark-mode experience-heading" : "experience-heading"}>
              <span className="name-gradient">Experiences</span>
            </h1>
            {workExperiences.sections.map((section, index) => (
              <div key={index} className="experience-section">
                <h2
                  className={
                    isDark
                      ? "dark-mode experience-section-title"
                      : "experience-section-title"
                  }
                >
                  {section.title}
                </h2>
                <div className="experience-cards-div">
                  {section.experiences.map((card, i) => {
                    return (
                      <ExperienceCard
                        key={i}
                        isDark={isDark}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.title,
                          descBullets: card.descBullets,
                          companyWebsite: card.url
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
