import React, { useContext } from "react";
import "./ResearchDetails.scss";
import { researchSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";
import { useParams, useHistory } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function ResearchDetails() {
    const { id } = useParams();
    const history = useHistory();
    const { isDark } = useContext(StyleContext);

    // Parse the ID which is in format: section-name-index
    const idParts = id.split('-');
    const projectIndex = parseInt(idParts.pop());
    const sectionTitleSlug = idParts.join('-');

    const section = researchSection.sections.find(
        (s) => s.title.toLowerCase().replace(/\s/g, '-') === sectionTitleSlug
    );
    const project = section ? section.projects[projectIndex] : null;

    if (!project) {
        return (
            <div className={isDark ? "dark-mode" : null}>
                <Header />
                <div className="error-container">
                    <h1>Project not found</h1>
                    <button className="back-btn" onClick={() => history.push("/")}>Back to Home</button>
                </div>
                <Footer />
            </div>
        );
    }

    function openUrlInNewTab(url) {
        if (!url) {
            return;
        }
        var win = window.open(url, "_blank");
        win.focus();
    }

    return (
        <div className={isDark ? "dark-mode detail-main" : "detail-main"}>
            <Header />
            <Fade bottom duration={1000} distance="20px">
                <div className="research-detail-container">
                    <div className="research-detail-card">
                        <button className="back-btn" onClick={() => history.push("/")}>
                            <i className="fas fa-arrow-left"></i> Back
                        </button>
                        <div className="research-detail-content">
                            {project.isThesis && (
                                <div className="thesis-badge">THESIS</div>
                            )}
                            <h1 className="detail-title">
                                {project.projectName}
                            </h1>
                            {project.publishedAt && (
                                <p className="detail-published">
                                    {project.publishedAt}
                                </p>
                            )}
                            <div className="detail-abstract-section">
                                <h3 className="section-heading">Abstract</h3>
                                <p className="detail-description">
                                    {project.projectDesc}
                                </p>
                            </div>

                            {project.footerLink && (
                                <div className="detail-footer-links">
                                    {project.footerLink.map((link, i) => (
                                        <button
                                            key={i}
                                            className="detail-tag"
                                            onClick={() => openUrlInNewTab(link.url)}
                                        >
                                            {link.name.toLowerCase().includes("github") && (
                                                <i className="fab fa-github" style={{ marginRight: "8px" }}></i>
                                            )}
                                            {link.name.toLowerCase().includes("pdf") && (
                                                <i className="fas fa-file-pdf" style={{ marginRight: "8px" }}></i>
                                            )}
                                            {link.name.toLowerCase().includes("view") && (
                                                <i className="fas fa-external-link-alt" style={{ marginRight: "8px" }}></i>
                                            )}
                                            {link.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Fade>
            <Footer />
        </div>
    );
}
