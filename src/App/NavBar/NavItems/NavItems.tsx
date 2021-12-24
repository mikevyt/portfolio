import React from 'react';
import Scroll from 'react-scroll';
import { ThemeButton } from '../../../components/ThemeButton';
import { ThemeContext } from '../../App';

import './NavItems.scss';

const ScrollLink = Scroll.Link;

interface NavItemsProps {
    onThemeChange: (isDarkTheme: boolean) => void;
}

const NavItems = ({ onThemeChange }: NavItemsProps) => {
    const isDarkTheme = React.useContext(ThemeContext);
    return (
        <div className="navbar-end nav-items">
            <ScrollLink to="about-me" smooth className={`navbar-item ${isDarkTheme && 'dark-navbar-item'}`}>
                About Me
            </ScrollLink>
            <ScrollLink to="knowledge" smooth className={`navbar-item ${isDarkTheme && 'dark-navbar-item'}`}>
                Knowledge
            </ScrollLink>
            <ScrollLink to="experience" smooth className={`navbar-item ${isDarkTheme && 'dark-navbar-item'}`}>
                Experience
            </ScrollLink>
            <ScrollLink to="projects" smooth className={`navbar-item ${isDarkTheme && 'dark-navbar-item'}`}>
                Projects
            </ScrollLink>
            <ScrollLink
                to="contact-me"
                smooth
                className={`navbar-item contact-button button ${isDarkTheme && 'is-light'}`}
            >
                Say Hello &nbsp;
                <span role="img" aria-label="wave">
                    👋🏽
                </span>
            </ScrollLink>
            <div className={`navbar-item`}>
                <ThemeButton onChange={onThemeChange} />
            </div>

        </div>
    );
};

export default NavItems;
