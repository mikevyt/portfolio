import React from 'react';
import { ThemeContext } from '../../App';
import './ProjectCard.scss';

interface ProjectCardProps {
    project: {
        name: string;
        coverPhoto?: string;
        date: string;
        body: string;
    };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const isDarkTheme = React.useContext(ThemeContext);
    let descriptionRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        descriptionRef.current!.innerHTML = project.body;
    });

    return (
        <article className={`message job-card ${isDarkTheme && 'dark-layer-1'}`}>
            {project.hasOwnProperty('coverPhoto') && (
                <div
                    className="message-header cover-photo"
                    style={{
                        backgroundImage: `url('${require(`../../../assets/${project.coverPhoto}`)}')`,
                    }}
                />
            )}
            <div className="message-body">
                <div className="title-row">
                    <div className="project-name">
                        <div>
                            <h1 className={`is-size-6 ${isDarkTheme && 'dark-text'}`}>
                                <b>{project.name}</b>
                            </h1>
                        </div>
                        <p className="has-text-grey is-size-7">
                            {project.date}
                        </p>
                    </div>
                </div>
                <div ref={descriptionRef} className={`is-size-6 ${isDarkTheme && 'dark-text'}`} />
            </div>
        </article>
    );
};
