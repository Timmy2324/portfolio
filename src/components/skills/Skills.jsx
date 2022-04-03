import React from 'react';
import s from './Skills.module.css';
import {Skill} from "./skill/Skill";

const skills = [
    {
        icon: 'icon',
        title: 'HTML',
        description: 'text',
    },
    {
        icon: 'icon',
        title: 'CSS',
        description: 'text',
    },
    {
        icon: 'icon',
        title: 'JavaScript',
        description: 'text',
    },
    {
        icon: 'icon',
        title: 'TypeScript',
        description: 'text',
    },
    {
        icon: 'icon',
        title: 'React',
        description: 'text',
    },
    {
        icon: 'icon',
        title: 'Redux',
        description: 'text',
    },
];

export const Skills = () => {

    return (
        <div className={s.skills}>
            <div className={`${s.skillsContainer} container`}>
                <h2 className={'h2 border'}>Skills</h2>
                <div className={`${s.skillsWrapper} border`}>
                    {skills.map((skill, index) => {
                        return <Skill key={index} icon={skill.icon} title={skill.title} description={skill.description}/>
                    })}
                </div>
            </div>
        </div>
    );
};