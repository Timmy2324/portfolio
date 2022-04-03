import React from 'react';
import s from './Nav.module.css';

export const Nav = () => {
    return (
        <nav className={`${s.nav} border`}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </nav>
    );
};