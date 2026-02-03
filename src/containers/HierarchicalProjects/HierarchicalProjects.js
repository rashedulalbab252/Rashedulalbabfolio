import React, { useContext } from "react";
import "./HierarchicalProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function HierarchicalProjects() {
    function openUrlInNewTab(url) {
        if (!url) {
            return;
        }
        var win = window.open(url, "_blank");
        win.focus();
    }

    const { isDark } = useContext(StyleContext);

    if (!bigProjects.display || !bigProjects.categories) {
        return null;
    }

    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main hierarchical-projects-main" id="hierarchical-projects">
                <div>
                    <h1 className="skills-heading project-title-center">{bigProjects.title}</h1>
                    <p
                        className={
                            isDark
                                ? "dark-mode project-subtitle"
                                : "subTitle project-subtitle"
                        }
                    >
                        {bigProjects.subtitle}
                    </p>

                    <div className="hierarchical-container">
                        {bigProjects.categories.map((category, categoryIndex) => {
                            return (
                                <div
                                    key={categoryIndex}
                                    className={
                                        isDark
                                            ? "dark-mode category-section"
                                            : "category-section"
                                    }
                                >
                                    {/* Category Header */}
                                    <div className="category-header">
                                        <div className="category-line"></div>
                                        <div className={isDark ? "dark-mode category-title-wrapper" : "category-title-wrapper"}>
                                            <i className={`${category.categoryIcon} category-icon`}></i>
                                            <h2 className={isDark ? "dark-mode category-title" : "category-title"}>
                                                {category.categoryName}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Projects List */}
                                    <div className="projects-list">
                                        {category.projects.map((project, projectIndex) => {
                                            const isLastProject = projectIndex === category.projects.length - 1;
                                            return (
                                                <div
                                                    key={projectIndex}
                                                    className="project-item"
                                                >
                                                    {/* Connection Line */}
                                                    <div className="connection-wrapper">
                                                        <div className={`vertical-line ${isLastProject ? 'last' : ''}`}></div>
                                                        <div className="horizontal-line"></div>
                                                        <div className="project-dot"></div>
                                                    </div>

                                                    {/* Project Card */}
                                                    <div
                                                        className={
                                                            isDark
                                                                ? "dark-mode hierarchical-project-card"
                                                                : "hierarchical-project-card"
                                                        }
                                                        onClick={() => openUrlInNewTab(project.footerLink[0]?.url)}
                                                    >
                                                        <h3 className={isDark ? "dark-mode project-name" : "project-name"}>
                                                            {project.projectName}
                                                        </h3>
                                                        <p className={isDark ? "dark-mode project-description" : "project-description"}>
                                                            {project.projectDesc}
                                                        </p>
                                                        {project.footerLink && (
                                                            <div className="project-links">
                                                                {project.footerLink.map((link, linkIndex) => {
                                                                    return (
                                                                        <span
                                                                            key={linkIndex}
                                                                            className={isDark ? "dark-mode project-link" : "project-link"}
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                openUrlInNewTab(link.url);
                                                                            }}
                                                                        >
                                                                            {link.name.toLowerCase().includes("github") && (
                                                                                <i className="fab fa-github" style={{ marginRight: "8px" }}></i>
                                                                            )}
                                                                            {link.name.toLowerCase().includes("pdf") && (
                                                                                <i className="fas fa-file-pdf" style={{ marginRight: "8px" }}></i>
                                                                            )}
                                                                            {link.name.toLowerCase().includes("report") && (
                                                                                <i className="fas fa-file-alt" style={{ marginRight: "8px" }}></i>
                                                                            )}
                                                                            {link.name}
                                                                        </span>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="view-more-container">
                        <p className={isDark ? "dark-mode view-more-text" : "view-more-text"}>
                            Looking for more? Explore my GitHub portfolio for additional end-to-end AI projects across Machine Learning, Computer Vision, NLP, Deep Learning, and Generative AI.
                        </p>
                        <a
                            href="https://github.com/rashedulalbab253"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-more-button"
                        >
                            <i className="fab fa-github"></i> Explore All Projects
                        </a>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
