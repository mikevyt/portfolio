import React from 'react';
import { Link } from 'react-scroll';

import NavItems from './NavItems/NavItems';

import './NavBar.scss';
import { ScrolledContext, ThemeContext } from '../App';

interface NavBarProps {
    onThemeChange: (isDarkTheme: boolean) => void;
}

export const NavBar = ({ onThemeChange }: NavBarProps) => {
    const hasScrolled = React.useContext(ScrolledContext);
    const isDarkTheme = React.useContext(ThemeContext);
    const [menuToggled, setMenuToggled] = React.useState(false);
    const [update, causeUpdate] = React.useState(false);

    const isMobile = window.innerWidth < 1024;

    const handleResize = () => causeUpdate(!update);

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    const toggleNav = () => {
        var nav = document.getElementById('nav-items') as HTMLElement;
        var className = nav.getAttribute('class') || "";
        setMenuToggled(!className.includes('is-active'));
    };

    const getNavStyle = React.useCallback(() => {
        let style = 'navbar is-fixed-top animated fadeIn'
        if (isDarkTheme) {
            style = style.concat(!hasScrolled ? ' dark-background' : ' dark-layer-1');
        } else if (hasScrolled) {
            style = style.concat(' drop-shadow');
        }
        return style;
    }, [hasScrolled, isDarkTheme])

    return (
        <nav
            className={getNavStyle()}
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand logo-container">
                    <Link to="splash" smooth>
                        <Logo hasScrolled={hasScrolled} />
                    </Link>
                    {isMobile && (
                        <button
                            className="navbar-burger burger"
                            aria-label="menu"
                            aria-expanded="false"
                            onClick={toggleNav}
                        >
                            {!menuToggled ? (
                                // Burger Icon
                                <>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </>
                            ) : (
                                <div className="exit-icon">
                                    <i className="fas fa-times"></i>
                                </div>
                            )}
                        </button>
                    )}
                </div>
                <div id="nav-items" className={`navbar-menu ${menuToggled && isDarkTheme && 'dark-layer-1'} ${menuToggled && 'is-active'}`} onClick={toggleNav}>
                    <NavItems onThemeChange={onThemeChange} />
                </div>
            </div>
        </nav>
    );
};

const Logo = ({ hasScrolled }: { hasScrolled: boolean }) => {
    const isDesktop = window.innerWidth > 1024;
    return (
        <div className={`logo-with-text animated fadeIn ${hasScrolled &&
            'make-visible'}`}>
            <div className="logo" />
            {isDesktop && <Name />}
        </div>
    );
}

const Name = () => {
    const isDarkTheme = React.useContext(ThemeContext);
    return (
        <div>
            <div className={`name-text ${isDarkTheme && 'dark-text'}`}>Michael Vytlingam</div>
            <div className={`position-text ${isDarkTheme && 'dark-text'}`}>
                Full Stack Developer
            </div>
        </div>
    );
};