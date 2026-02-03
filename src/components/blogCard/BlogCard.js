import React from "react";
import "./BlogCard.scss";
import { useHistory } from "react-router-dom";

export default function BlogCard({ blog, isDark, index }) {
  const history = useHistory();

  function openBlogDetail(e) {
    e.preventDefault();
    history.push(`/blog-details/${index}`);
  }

  return (
    <div onClick={openBlogDetail} className="blog-card-clickable">
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        {blog.image && (
          <div className="blog-card-image-container">
            <img className="blog-card-image" src={blog.image} alt={blog.title} />
          </div>
        )}
        <div className="blog-card-content">
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-description">{blog.description}</p>
          <div className="blog-card-footer">
            <span className="read-more-text">Read Analysis</span>
            <div className="go-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  );
}
