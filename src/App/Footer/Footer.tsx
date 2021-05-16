import React, { FC } from 'react';
import { Link } from 'react-scroll';

// import ResumePath from '../../assets/resume.pdf';

import './Footer.scss';

const Footer: FC = () => {
    return (
        <footer className="footer">
            <section className="container columns">
                <div className="column">
                    <div className="columns">
                        <div className="social-media-links column">
                            <a
                                href="https://github.com/mikevyt/"
                                rel="Github Profile"
                            >
                                <i className="fab fa-github social-icon"></i>
                            </a>
                            <a
                                href="https://medium.com/@Dennis.vytlingam"
                                rel="Medium Profile"
                            >
                                <i className="fab fa-medium social-icon"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mikevyt/"
                                rel="LinkedIn Profile"
                            >
                                <i className="fab fa-linkedin social-icon"></i>
                            </a>
                            <a
                                href="https://www.kaggle.com/mikevyt"
                                rel="Kaggle Profile"
                            >
                                <i className="fab fa-kaggle social-icon"></i>
                            </a>
                        </div>
                        {/* <div className="column resume-button">
                            <a href={ResumePath} target="_blank" rel="noopener noreferrer" className="button">
                                View Full Resume
                            </a>
                        </div> */}
                    </div>
                    <p>© 2020 Dennis Vytlingam. All Rights Reserved.</p>
                </div>
                {/* <div className="is-divider-vertical"></div> */}
                <div className="column footer-right">
                    <Link to="splash" smooth>
                        <i className="fas fa-arrow-up"></i>
                    </Link>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
