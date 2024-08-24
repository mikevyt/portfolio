import React from "react";
import { ThemeContext } from "../App";
import "./AboutMe.scss";

export const AboutMe = () => {
  const isDarkTheme = React.useContext(ThemeContext);
  const [update, causeUpdate] = React.useState(false);

  const handleResize = () => causeUpdate(!update);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="about-me container">
      <div className="about-me-photos">
        <div className="selfie" />
      </div>

      <div className={`about-me-text ${isDarkTheme ? "dark-text" : ""}`}>
        <p>
          I'm a Software Engineer at{" "}
          <a
            className={`${isDarkTheme ? "dark-underline" : "underline"}`}
            href="https://www.snowflake.com/"
          >
            Snowflake
          </a>
          .
        </p>
        <br />
        <p>
          I studied Mechanical Engineering at the{" "}
          <a
            className={`${isDarkTheme ? "dark-underline" : "underline"}`}
            href="https://uwaterloo.ca/"
          >
            University of Waterloo
          </a>
          .
        </p>
        <br />
        <p>
          I enjoy cars, cricket, volleyball, tennis and basketball. I enjoy
          lifting weights, playing Werewolf with friends, experimenting with new
          ideas and learning as much as I can along the way.
        </p>
        <br />
        <p>Below are my experiences, let me know what you think!</p>
        <br />
        <div className="sign-off">
          <img
            src={require(`../../assets/signature.png`)}
            alt="signature"
            className={`signature ${isDarkTheme ? "dark-signature" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};
