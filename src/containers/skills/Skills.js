import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  // Skills from reference image
  const skillCategories = [
    {
      title: "Programming",
      icon: "fas fa-code",
      skills: ["Python", "MATLAB", "C/C++", "LaTeX"]
    },
    {
      title: "Tools & Frameworks",
      icon: "fas fa-tools",
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "Huggingface Transformers"]
    },
    {
      title: "Software & DevOps",
      icon: "fas fa-server",
      skills: ["Simulink", "Proteus", "AutoCAD", "FastAPI", "Docker", "Git", "LangGraph"]
    },
    {
      title: "AI/ML",
      icon: "fas fa-brain",
      skills: [
        "Supervised & Unsupervised Learning",
        "Deep Learning (Neural Networks, Transformers)",
        "NLP, LLM, Multimodal LLM",
        "RAG, Generative Models (GAN)"
      ]
    },
    {
      title: "Computer Vision",
      icon: "fas fa-eye",
      skills: [
        "Image Segmentation",
        "Object Detection",
        "Digital Image Processing",
        "OCR",
        "Vision Language Model (VLM)"
      ]
    },
    {
      title: "Hardware",
      icon: "fas fa-microchip",
      skills: ["Arduino", "FPGA"]
    }
  ];

  return (
    <div id="skills">
      <div className="skills-main-div">
        <Fade bottom duration={1000}>
          <div className="skills-header">
            <h1 className="skills-heading">Technical Skills</h1>
            <p className={isDark ? "dark-mode skills-text-subtitle" : "skills-text-subtitle"}>
              A comprehensive skill set spanning AI/ML, Computer Vision, Software Development, and Hardware Engineering.
            </p>
          </div>
        </Fade>

        <Fade bottom duration={1200}>
          <div className="software-skills-row">
            <SoftwareSkill />
          </div>
        </Fade>

        <div className="skills-categories-grid">
          {skillCategories.map((category, index) => (
            <Fade bottom duration={1000} distance="20px" delay={index * 100} key={index}>
              <div className={isDark ? "dark-mode skill-category-card" : "skill-category-card"}>
                <div className="skill-category-header">
                  <div className="skill-category-title-div">
                    <i className={`${category.icon} skill-category-icon`}></i>
                    <h3 className="skill-category-title">{category.title}</h3>
                  </div>
                  <div className="category-divider"></div>
                </div>
                <div className="skill-items">
                  {category.skills.map((skill, i) => (
                    <span key={i} className={isDark ? "dark-mode skill-tag" : "skill-tag"}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
