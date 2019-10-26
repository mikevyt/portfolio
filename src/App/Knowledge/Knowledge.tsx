import React, { FC } from 'react';

import './Knowledge.css';

const Knowledge: FC = () => {
    const languages = ['Typescript/Javascript', 'Python', 'Go', 'SQL', 'Bash', 'MATLAB', 'Swift', 'C#', 'C++'];
    return (
        <section className="container knowledge">
            <h1 className="title">Knowledge</h1>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <h3 className="title is-6">Languages</h3>
                        <div className="tags are-medium">
                            { languages.map(language => (
                                <span className="tag">
                                    {language}
                                </span>
                            ))}
                        </div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <h3 className="title is-6">Technologies</h3>
                        <div className="tags are-medium">
                            { languages.map(language => (
                                <span className="tag">
                                    {language}
                                </span>
                            ))}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Knowledge;