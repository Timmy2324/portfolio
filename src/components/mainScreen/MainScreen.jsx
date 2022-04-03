import React from 'react';
import s from './MainScreen.module.css';

export const MainScreen = () => {
    return (
        <div className={s.mainScreen}>
            <div className={`container`}>
                <div className={s.mainScreenContainer}>
                    <div className={`${s.text} border`}>
                        <span>Привет!</span>
                        <h1>Меня зовут <span>Тимур Салихов</span></h1>
                        <p>Я Frontend developer</p>
                    </div>
                    <div className={`${s.photo} border`}>

                    </div>
                </div>
            </div>
        </div>
    );
};