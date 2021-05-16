import React, { FC } from 'react';
import ResumePath from '../../../assets/resume.pdf';

import './SplashText.scss';

const SplashText: FC = () => {
    return (
        <div>
            <h1 className="title is-1">
                Hey, I'm Dennis.{' '}
                <span role="img" aria-label="wave">
                    👋🏽
                </span>
            </h1>
            <h2 className="subtitle">
                I like to build beautiful and smart things for wonderful people.
                <br />
                I’m currently looking for internships for the Fall 2021 and/or Winter 2022 seasons.
            </h2>
            <a
                href={ResumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="button is-info"
            >
                Check out my resume here
            </a>
        </div>
    );
};

export default SplashText;
