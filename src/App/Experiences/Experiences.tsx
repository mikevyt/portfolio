import React from "react";
import { ThemeContext } from "../App";
import "./Experiences.scss";

import JobCard from "./JobCard/JobCard";

export const Experiences = () => {
  const isDarkTheme = React.useContext(ThemeContext);
  const [update, causeUpdate] = React.useState(false);

  const handleResize = () => causeUpdate(!update);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const jobs = [
    {
      logo: "snowflake.png",
      company: "Snowflake",
      position: "Software Engineer",
      date: "September 2022 - Present",
      location: "San Mateo, CA",
      body: `
                <b>Tech:</b> TypeScript, React, Express, JEST
            `,
    },
    {
      logo: "snowflake.png",
      company: "Snowflake",
      position: "Software Engineering Intern",
      date: "May 2021 - August 2021",
      location: "San Mateo, CA (Remote)",
      body: `
                Built out captivating customer experiences on the Snowflake Data Marketplace product.
                <br/>
                <br/>
                <b>Tech:</b> TypeScript, React, Express, JEST
            `,
    },
    {
      logo: "bb.png",
      company: "BlackBerry",
      position: "Machine Learning Engineering Student",
      date: "September 2020 - December 2020",
      location: "Ottawa, ON (Remote)",
      body: `
                I improved my team's existing NLP-based open source license 
                detection pipeline, used to automate open source compliance.
                I reduced downloading and file crawling time by 70% after introducing multithreading and
                multiprocessing.
                <br/>
                <br/>
                <b>Tech:</b> Python, Pytorch, Jenkins
            `,
    },
    {
      logo: "cryptonumerics.jpg",
      company: "CryptoNumerics",
      position: "Full Stack Engineering Intern",
      date: "January 2020 - April 2020",
      location: "Toronto, ON",
      body: `
                I built and shipped new features to our CN-Protect
                application; a tool for dataset de-identification. I also built a 
                new reporting tool to be used across all of our products in order to keep the
                user informed of the changes to their data.
                <br/>
                <br/>
                <b>Tech:</b> Java, Electron, React, Redux, JEST
            `,
    },
    {
      logo: "uw.jpg",
      company: "University of Waterloo",
      position: "Machine Learning Researcher",
      date: "September 2019 - December 2019",
      location: "Waterloo, ON",
      body: `
                I took part in training real-time object detection model of 
                kitchen items to help a robot operate in its surroundings. 
                I can't tell you the specifics as we're still working on it, 
                but trust me, it's really cool.
                <br/>
                <br/>
                <b>Tech:</b> Darknet, YOLO, TensorFlow
            `,
    },
    {
      logo: "gd.jpg",
      coverPhoto: "gd-cover.jpg",
      company: "Grain Discovery",
      position: "Software Engineering Intern",
      date: "May 2019 - August 2019",
      location: "Toronto, ON",
      body: `
                I worked on Grain Discovery's agricultural trading marketplace. 
                Introducing effective UI/UX was a challenge due to the wide demographics
                of users using the platform, from farmers to business traders. 
                However, introducing simplified user flows, and quick access to important 
                information proved to be effective in user testing. 
                <br />
                Outside of front end, 
                I also created RESTful endpoints to handle user interaction, as well as 
                incorporated Bash scripts to streamline developer pipelines.
                <br/>
                <br/>
                <b>Tech:</b> React, Redux, Express, DeckGL, Webpack, Babel, 
                Hyperledger Fabric (TypeScript), Bash, Docker, Semantic UI, 
                Lottie, Figma, JEST, Enzyme
            `,
    },
    {
      logo: "engineering.jpg",
      coverPhoto: "engineering-cover.jpg",
      company: "ENGINEERING.com",
      position: "Software Engineering Intern",
      date: "September 2018 - December 2018",
      location: "Toronto, ON",
      body: `
                I was working on ENGINEERING.com's online collaboration platform, ProjectBoard. 
                I designed and developed the new home page for the platform as well as the user 
                profile pages. I also improved the analytics dashboard, incorporating new data 
                visualizations that proved very useful for future business decisions.
                <br/>
                <br/>
                <b>Tech:</b> Vue, Vuex, Sass, Fabric.js, Go, MySQL, TestCafe
            `,
    },
    {
      logo: "snyder.jpg",
      company: "Snyder Construction",
      position: "Assistant Project Manager",
      date: "January 2018 - April 2018",
      location: "Whitby, ON",
      body: `
                I was involved in all aspects of Snyder's construction
                projects, from price estimation to closeout. I drew up 
                project schedules, defined scopes and ensured they were 
                adhered to through frequent meetings.
                <br/>
                <br/>
                <b>Taught Me:</b> the importance of getting a job done quickly 
                and effectively, how to drive massive pickup trucks. 🚚
            `,
    },
    {
      logo: "mvgd.jpg",
      coverPhoto: "kendo.jpg",
      company: "MVGD",
      position: "Freelance Graphic Designer",
      date: "Dec 2015 - Sept 2018",
      location: "Remote",
      body: `
                I created logos, banners, documents, and websites for 
                various clients, including the University of Toronto 
                Kendo Club, LSPDFR.com, and Rubiar.
            `,
    },
  ];

  const isMobile = window.innerWidth < 1024;

  const columns: any[][] = [[], []];
  if (isMobile) {
    columns[0] = jobs;
  } else {
    for (let i = 0; i < jobs.length - 1; i += 2) {
      columns[0].push(jobs[i]);
      columns[1].push(jobs[i + 1]);
    }
  }

  return (
    <div className="container">
      <h1
        className={`title has-text-centered is-3 ${
          isDarkTheme && "dark-title"
        }`}
      >
        Experiences
      </h1>

      {isMobile ? (
        columns[0].map((job, index) => (
          <div className="experiences" key={index}>
            <JobCard job={job} />
          </div>
        ))
      ) : (
        <div className="two-column">
          {columns.map((column, cIndex) => (
            <div className="experiences" key={cIndex}>
              {column.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
