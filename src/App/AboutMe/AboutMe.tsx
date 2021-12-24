import React from 'react';
import { ThemeContext } from '../App';
import './AboutMe.scss';

export const AboutMe = () => {
    const isDarkTheme = React.useContext(ThemeContext);
    const [update, causeUpdate] = React.useState(false);

    const handleResize = () => causeUpdate(!update);

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    });

    return (
        <div className="about-me container">
            <div className="about-me-photos">
                <div className="selfie" />
            </div>

            <div className={`about-me-text ${isDarkTheme && 'dark-text'}`}>
                <p>
                    I'm a <mark>Software Engineering Intern @ <a href="https://www.snowflake.com/">Snowflake</a></mark>
                </p>
                <br />
                <p>
                    I am also a fourth year <mark>mechanical engineering student @{' '}
                        <a href="https://uwaterloo.ca/">the University of Waterloo</a></mark>
                </p>
                <br />
                <p>
                    I'm a lover of cars, planes, cricket, and basketball. I
                    enjoy lifting weights, playing Werewolf with friends,
                    experimenting with new ideas and learning as much as I can
                    along the way.
                </p>
                <br />
                <p>Below are my experiences, let me know what you think!</p>
                <br />
                <div className="sign-off">
                    <img
                        src={require(`../../assets/signature.png`)}
                        alt="signature"
                        className={`signature ${isDarkTheme && 'dark-signature'}`}
                    />
                </div>
            </div>
        </div>
    );
};
