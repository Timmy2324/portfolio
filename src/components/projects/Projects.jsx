import React from 'react';
import s from './Projects.module.css';
import {Project} from "./project/Project";

const projects = [
    {
        link: '',
        img: '',
        title: 'Title',
        description: 'description',
    },
    {
        link: '',
        img: '',
        title: 'Title',
        description: 'description',
    },
];

export const Projects = () => {
    return (
        <div className={s.projects}>
            <div className={`${s.projectsContainer} container`}>
                <h2 className='h2 border'>
                    Projects
                </h2>
                <div className={`${s.projectsWrapper} border`}>
                    {projects.map((project, index) => {
                        return <Project
                            key={index}
                            link={project.link}
                            img={project.img}
                            title={project.title}
                            description={project.description}/>;
                    })}
                </div>
            </div>
        </div>
    );
};