import React, { useEffect } from "react";
import "./Top.scss";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    // When the user scrolls down 20px from the top of the document, show the button
    const scrollFunction = () => {
      const topButton = document.getElementById("topButton");
      if (topButton) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          topButton.style.visibility = "visible";
        } else {
          topButton.style.visibility = "hidden";
        }
      }
    };

    window.onscroll = scrollFunction;
    window.onload = scrollFunction;

    // Initial check
    scrollFunction();

    // Cleanup on unmount
    return () => {
      window.onscroll = null;
      window.onload = null;
    };
  }, []);

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
