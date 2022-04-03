import React from 'react';
import s from './Skill.module.css';

export const Skill = (props) => {
    return (
        <div className={`${s.skill} border`}>
            <div className={s.icon}>{props.icon}</div>
            <h3 className={s.title}>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
        </div>
    );
};