import React, { useEffect, useState } from "react";
import "./ScrollTop.css";
function ScrollTop() {
  const [isVisiable, setIsVisiable] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisiable(true);
    }
  };
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  });
  return (
    <div className="scroll-to-top">
      {isVisiable && (
        <a onClick={scrollToTop} className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      )}
    </div>
  );
}

export default ScrollTop;
