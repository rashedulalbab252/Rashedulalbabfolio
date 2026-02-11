import React, { useState, useContext } from "react";
import "./Research.scss";
import { researchSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Research() {
    const { isDark } = useContext(StyleContext);
    const [expandedProject, setExpandedProject] = useState(null);

    const toggleAbstract = (id) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    function openUrlInNewTab(url) {
        if (!url) return;
        window.open(url, "_blank").focus();
    }

    if (!researchSection.display) {
        return null;
    }

    return (
        <div className="research-main" id="research">
            <div className="research-main-div">
                <Fade bottom duration={1000} distance="20px">
                    <div className="research-header">
                        <h1 className={isDark ? "dark-mode research-heading" : "research-heading"}>
                            {researchSection.title}
                        </h1>
                        <div className="research-interests-container">
                            <h2 className={isDark ? "dark-mode research-subtitle" : "research-subtitle"}>
                                {researchSection.subtitle}
                            </h2>
                            <div className="interests-div">
                                {researchSection.interests.map((interest, i) => (
                                    <div key={i} className={isDark ? "dark-mode interest-span" : "interest-span"}>
                                        <i className={
                                            interest.toLowerCase().includes("healthcare") ? "fas fa-heartbeat" :
                                                interest.toLowerCase().includes("renewable") ? "fas fa-solar-panel" :
                                                    interest.toLowerCase().includes("vision") ? "fas fa-eye" :
                                                        interest.toLowerCase().includes("natural language") ? "fas fa-brain" :
                                                            interest.toLowerCase().includes("rf systems") ? "fas fa-broadcast-tower" : "fas fa-microscope"
                                        }></i>
                                        {interest}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Fade>

                <div className="research-publications-list">
                    {researchSection.sections.map((section, sidx) => (
                        <div key={sidx} className="research-category-group">
                            <h2 className={isDark ? "dark-mode category-title" : "category-title"}>
                                {section.title}
                            </h2>
                            <div className="publication-items">
                                {section.projects.map((project, pidx) => {
                                    const projectId = `${sidx}-${pidx}`;
                                    const isExpanded = expandedProject === projectId;

                                    return (
                                        <Fade bottom duration={1000} distance="20px" key={pidx}>
                                            <div className={isDark ? "dark-mode publication-row" : "publication-row"}>
                                                <div className="pub-content">
                                                    <div className="pub-header">
                                                        {project.isThesis && <span className="thesis-label">THESIS</span>}
                                                        <h3 className="pub-title" onClick={() => project.footerLink && openUrlInNewTab(project.footerLink[0]?.url)}>
                                                            {project.projectName}
                                                        </h3>
                                                        <div className="pub-venue-row">
                                                            {project.publishedAt && (
                                                                <span
                                                                    className="venue-badge"
                                                                    onClick={() => project.venueLink && openUrlInNewTab(project.venueLink)}
                                                                    style={{ cursor: project.venueLink ? "pointer" : "default" }}
                                                                >
                                                                    {project.publishedAt}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="pub-actions">
                                                        <button
                                                            className={`action-btn ${isExpanded ? 'active' : ''}`}
                                                            onClick={() => toggleAbstract(projectId)}
                                                        >
                                                            <i className={`fas ${isExpanded ? 'fa-chevron-up' : 'fa-align-left'}`}></i>
                                                            {isExpanded ? "Hide Abstract" : "Abstract"}
                                                        </button>

                                                        {project.footerLink?.map((link, lid) => (
                                                            <button
                                                                key={lid}
                                                                className="action-btn link-btn"
                                                                onClick={() => openUrlInNewTab(link.url)}
                                                            >
                                                                <i className={
                                                                    link.name.toLowerCase().includes("pdf") ? "fas fa-file-pdf" :
                                                                        link.name.toLowerCase().includes("view") ? "fas fa-external-link-alt" :
                                                                            link.name.toLowerCase().includes("github") ? "fab fa-github" : "fas fa-link"
                                                                }></i>
                                                                {link.name}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    {isExpanded && (
                                                        <div className="abstract-container">
                                                            <p className="abstract-text">{project.projectDesc}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </Fade>
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
