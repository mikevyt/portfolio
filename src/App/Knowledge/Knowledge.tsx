import React from 'react';

import withCenterFormatting from '../../HOCs/withCenterFormatting/withCenterFormatting';
import { ThemeContext } from '../App';

import './Knowledge.scss';

const Knowledge = () => {
    const isDarkTheme = React.useContext(ThemeContext);
    const skills = [
        {
            title: 'Languages',
            tags: [
                'Python',
                'Go',
                'TypeScript',
                'JavaScript',
                'C++',
                'SQL',
                'MATLAB',
                'HTML5',
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
                'JEST',
                'Enzyme',
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
                '.NET Core',
                'AWS S3',
                'Firebase',
                'Docker',
                'Azure DevOps (Pipelines)',
                'CircleCI',
                'AWS EC2',
            ],
        },
        {
            title: 'Data',
            tags: [
                'PostgreSQL',
                'MongoDB',
                'TensorFlow',
                'Keras',
                'YOLO',
                'Elasticsearch',
                'Microsoft Cognitive Services (LUIS)',
            ],
        },
    ];

    return (
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

export default withCenterFormatting('Knowledge', Knowledge);
