import React from 'react';
import s from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${s.footerContainer} container`}>
                <h2 className='h2 border'>
                    Kek
                </h2>
                <div className={s.linksWrapper}>
                    <div className={`${s.links} border`}>
                        <a href="">Github</a>
                        <a href="">Habr</a>
                        <a href="">LinkedIn</a>
                        <a href="">Telegram</a>
                    </div>
                </div>
                <p className={`${s.copyright} border`}>
                    &copy; Все права защищены
                </p>
            </div>
        </div>
    );
};