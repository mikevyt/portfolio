import React, { FC } from 'react';
import { Link } from 'react-scroll';
import './Splash.scss';

import SplashText from './SplashText/SplashText';
import Portrait from './Portrait/Portrait';

const Splash: FC = () => {
    return (
        <section className="container splash">
            <div className="splash-content animated fadeIn">
                <SplashText />
                <Portrait />
            </div>
            <Link 
                className="arrow-down animated bounce delay-2s"
                to="about-me"
                smooth
            >
                <i className="fas fa-chevron-down"></i>
            </Link>
        </section>
    );
}

export default Splash;