import React from 'react';
import s from './Project.module.css';

export const Project = (props) => {
    return (
        <div className={`${s.project} border`}>
            <a className={s.link} href={props.link}>
                <img src={props.img} alt=""/>
            </a>
            <div>
                <h3>
                    {props.title}
                </h3>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
};