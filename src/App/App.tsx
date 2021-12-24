import React from 'react';
import { Element } from 'react-scroll';

import './App.scss';

import Splash from './Splash/Splash';
import Knowledge from './Knowledge/Knowledge';
import ContactMe from './ContactMe/ContactMe';
import { NavBar } from './NavBar/NavBar';
import { AboutMe } from './AboutMe/AboutMe';
import { Projects } from './Projects/Projects';
import { Experiences } from './Experiences/Experiences';
import { Footer } from './Footer/Footer';

export const ThemeContext = React.createContext(false);
export const ScrolledContext = React.createContext(false);
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const App = () => {
    const [hasScrolled, setHasScrolled] = React.useState(false);
    const [isDarkTheme, setIsDarkTheme] = React.useState(prefersDarkScheme);

    const handleScroll = React.useCallback(() => {
        if (window.scrollY > 0 && !hasScrolled) {
            setHasScrolled(true);
        } else if (window.scrollY === 0 && hasScrolled) {
            setHasScrolled(false);
        }
    }, [hasScrolled]);

    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <ThemeContext.Provider value={isDarkTheme}>
            <ScrolledContext.Provider value={hasScrolled}>
                <div className={`${isDarkTheme && 'dark-background'}`}>
                    <NavBar onThemeChange={(isDarkTheme) => setIsDarkTheme(isDarkTheme)} />
                    <Element id="splash" name="splash">
                        <Splash />
                    </Element>
                    <Element id="about-me" name="about-me" className="body-section">
                        <AboutMe />
                    </Element>
                    <Element
                        id="knowledge"
                        name="knowledge"
                        className="body-section"
                    >
                        <Knowledge />
                    </Element>
                    <Element
                        id="experience"
                        name="experience"
                        className="body-section"
                    >
                        <Experiences />
                    </Element>
                    <Element id="projects" name="projects" className="body-section">
                        <Projects />
                    </Element>
                    <Element
                        id="contact-me"
                        name="contact-me"
                        className="body-section"
                    >
                        <ContactMe />
                    </Element>
                    <Footer />
                </div>
            </ScrolledContext.Provider>
        </ThemeContext.Provider>
    );
}
