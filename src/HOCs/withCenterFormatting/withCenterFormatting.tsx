import React from 'react';
import { ThemeContext } from '../../App/App';
import './withCenterFormatting.scss';

type ComponentType = React.ComponentClass | React.StatelessComponent;

const withCenterFormatting = (
    title: string,
    WrappedComponent: ComponentType
) => {
    return () => {
        const isDarkTheme = React.useContext(ThemeContext);
        return (
            <div className={`container is-half is-offset-one-quarter ${isDarkTheme ? 'dark-with-center' : 'with-center'}`}>
                <h1 className={`title has-text-centered is-3 ${isDarkTheme && 'dark-title'}`}>{title}</h1>
                <WrappedComponent />
            </div>
        );
    };
};

export default withCenterFormatting;
