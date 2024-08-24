import React from "react";
import { ThemeContext } from "../App/App";

export const SocialIcons = () => {
  const isDarkTheme = React.useContext(ThemeContext);
  return (
    <div className="social-media-links">
      <a
        href="https://github.com/mikevyt/"
        rel="Github Profile"
        className={isDarkTheme ? "dark-social-icon" : "social-icon"}
      >
        <i className={`fab fa-github`}></i>
      </a>
      <a
        href="https://www.linkedin.com/in/mikevyt/"
        rel="LinkedIn Profile"
        className={isDarkTheme ? "dark-social-icon" : "social-icon"}
      >
        <i className={`fab fa-linkedin`}></i>
      </a>
    </div>
  );
};
