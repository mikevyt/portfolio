import React from 'react';

import './Projects.scss';

import { ProjectCard } from './ProjectCard/ProjectCard';
import { ThemeContext } from '../App';

export const Projects = () => {
    const isDarkTheme = React.useContext(ThemeContext);
    const projects = [
        {
            name: 'projectRollout',
            coverPhoto: 'rollout.png',
            date: 'April 2020 (Paused)',
            body: `
                A platform for matchmaking gaming teammates based on non-traditional 
                features, such as their hero preferences, their likeliness to tilt, 
                and feedback from previous matches.
                <br/>
                <br/>
                <b>Tech:</b> React (TypeScript), Figma, Go, MongoDB, Discord OAuth2, Discord Bots
                <br/>
                <br/>
                Check out the project on <a href='https://github.com/mikevyt/rollout'/>Github</a>.
            `,
        },
        {
            name: 'Handwritten Sudoku',
            coverPhoto: 'sudoku.gif',
            date: 'April 2020',
            body: `
                The classic game of Sudoku with handwritten digits. 
                Using the MNIST handwriting dataset, I trained a CNN 
                model to classify handwritten digits with an accuracy of 98.5%. 
                I then created a React front end that could generate an 
                image based on user input and pass it into the model through a Flask REST API.
                <br/>
                <br/>
                <b>Tech:</b> TensorFlow, Keras, React, Flask
                <br/>
                <br/>
                Check out the project on <a href='https://github.com/mikevyt/handwritten-sudoku'/>Github</a>.
            `,
        },
        {
            name: 'projectDougScore',
            date: 'September 2019',
            body: `
                A simple GraphQL API for a vehicle business app to experiment with GraphQL queries and mutations.
                <br/>
                <b>Tech:</b> Apollo GraphQL, TypeScript
                <br/>
                <br/>
                Check out the project on <a href='https://github.com/mikevyt/projectDougScore'/>Github</a>.
            `,
        },
    ];

    return (
        <div className="container">
            <h1 className={`title has-text-centered is-3 ${isDarkTheme && 'dark-title'}`}>Projects</h1>
            <div className="projects">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

