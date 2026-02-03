import React, { useContext } from "react";
import "./BlogPage.scss";
import Blogs from "../blogs/Blogs";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";

export default function BlogPage() {
    const { isDark } = useContext(StyleContext);
    const history = useHistory();

    return (
        <div className={isDark ? "dark-mode blog-page-main" : "blog-page-main"}>
            <Header />
            <div className="blog-page-container">
                <Fade bottom duration={1000} distance="20px">
                    <button className="back-btn" onClick={() => history.push("/")}>
                        <i className="fas fa-arrow-left"></i> Back
                    </button>
                    <Blogs />
                </Fade>
            </div>
            <Footer />
        </div>
    );
}
