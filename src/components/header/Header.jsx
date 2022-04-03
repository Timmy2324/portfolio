import React from 'react';
import s from './Header.module.css';
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${s.headerContainer} container`}>
                <Nav/>
            </div>

        </div>
    );
};