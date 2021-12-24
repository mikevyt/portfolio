import React from 'react';
import { Link } from 'react-scroll';
import { SocialIcons } from '../../components/SocialIcons';
import { ThemeContext } from '../App';

import './Footer.scss';

export const Footer = () => {
    const isDarkTheme = React.useContext(ThemeContext);
    return (
        <footer className={`footer ${isDarkTheme && 'dark-layer-1'}`}>
            <section className="container columns">
                <div className="column">
                    <SocialIcons />
                    <p>© 2022 Michael Vytlingam. All Rights Reserved.</p>
                </div>
                <div className="column footer-right">
                    <Link to="splash" smooth>
                        <i className="fas fa-arrow-up"></i>
                    </Link>
                </div>
            </section>
        </footer>
    );
};
