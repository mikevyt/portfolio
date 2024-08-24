import React from "react";
import { ThemeContext } from "../../App";
import "./JobCard.scss";

interface JobCardProps {
  job: {
    logo: string;
    coverPhoto?: string;
    company: string;
    position: string;
    date: string;
    location: string;
    body: string;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  const isDarkTheme = React.useContext(ThemeContext);
  let descriptionRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    descriptionRef.current!.innerHTML = job.body;
  });

  return (
    <article
      className={`message job-card ${isDarkTheme ? "dark-layer-1" : ""}`}
    >
      {job.hasOwnProperty("coverPhoto") && (
        <div
          className="message-header cover-photo"
          style={{
            backgroundImage: `url('${require(`../../../assets/${job.coverPhoto}`)}')`,
          }}
        />
      )}
      <div className="message-body">
        <div className="title-row">
          <img
            src={require(`../../../assets/${job.logo}`)}
            alt={`${job.company} logo`}
            className="company-logo"
          />
          <div className="company-name">
            <div>
              <h1 className={`is-size-6 ${isDarkTheme ? "dark-text" : ""}`}>
                <b>{job.company} /</b>&nbsp;{job.position}
              </h1>
            </div>
            <p className="has-text-grey is-size-7">
              {job.location} | {job.date}
            </p>
          </div>
        </div>
        <div
          ref={descriptionRef}
          className={`is-size-6 ${isDarkTheme ? "dark-text" : ""}`}
        />
      </div>
    </article>
  );
};

export default JobCard;
