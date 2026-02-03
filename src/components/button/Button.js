import React from "react";
import "./Button.scss";

export default function Button({ text, className, href, newTab, onClick }) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    // For hash links on mobile, ensure smooth scrolling works
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        onClick={handleClick}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </div>
  );
}
