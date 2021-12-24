import React from 'react';

import { ThemeContext } from '../App';

import './Knowledge.scss';

const Knowledge = () => {
    const isDarkTheme = React.useContext(ThemeContext);
    const skills = [
        {
            title: 'Languages',
            tags: [
                'TypeScript',
                'JavaScript',
                'Python',
                'Go',
                'Dart',
                'C/C++',
                'MATLAB',
                'Bash',
                'SQL',
                'HTML',
                'Sass',
            ],
        },
        {
            title: 'Front End',
            tags: [
                'React',
                'Redux',
                'Vue',
                'Electron',
                'Flutter',
                'JEST',
                'Enzyme',
                'React Testing Library',
                'Webpack',
                'Babel',
                'Bulma',
                'Lottie',
                'Figma',
                'Gatsby',
                'Apollo GraphQL',
                'Semantic UI',
                'Adobe Illustrator',
                'Adobe Photoshop',
                'Adobe After Effects',
            ],
        },
        {
            title: 'Back End + Infrastructure',
            tags: [
                'Express',
                'Flask',
                'Django',
                'Firebase',
                'Docker',
                'Jenkins',
                'AWS',
            ],
        },
        {
            title: 'Data',
            tags: [
                'PostgreSQL',
                'MongoDB',
                'Snowflake',
                'TensorFlow',
                'Keras',
                'YOLO',
                'Elasticsearch',
                'Numpy',
                'Pandas',
                'Matplotlib',
            ],
        },
    ];

    return (
        <div className={`container is-half is-offset-one-quarter knowledge-container ${isDarkTheme ? 'dark-with-center' : 'with-center'}`}>
            <h1 className={`title has-text-centered is-3 ${isDarkTheme && 'dark-title'}`}>Knowledge</h1>
            <div className="knowledge">
                <article>
                    {skills.map((skill) => (
                        <div className="category" key={skill.title}>
                            <h1 className={`title is-size-4 ${isDarkTheme && 'dark-title'}`}>{skill.title}</h1>
                            <Tags tags={skill.tags} />
                        </div>
                    ))}
                </article>
            </div>
        </div>
    );
};

interface TagsProps {
    tags: string[];
}

const Tags = ({ tags }: TagsProps) => (
    <div className="tags">
        {tags.map((tag, index) => (
            <span key={index} className="tag is-info is-rounded is-light skill">
                {tag}
            </span>
        ))}
    </div>
);

export default Knowledge;
