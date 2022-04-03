import React from 'react';
import s from './Contacts.module.css';

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${s.contactsContainer} container`}>
                <h2 className='h2 border'>
                    Contact me
                </h2>
                <div className={s.contactsWrapper}>
                    <div className={`${s.myContacts} border`}>
                        <div className={`${s.cardContact} border`}>
                            <h3 className={`${s.cardContactTitle} border`}>
                                Telegram
                            </h3>
                            <p className={`${s.cardContactLink}`}>
                                <a href="">@telegram</a>
                            </p>
                        </div>
                        <div className={`${s.cardContact} border`}>
                            <h3 className={`${s.cardContactTitle} border`}>
                                E-mail
                            </h3>
                            <p className={`${s.cardContactLink}`}>
                                <a href="">@E-mail</a>
                            </p>
                        </div>
                        <div className={`${s.cardContact} border`}>
                            <h3 className={`${s.cardContactTitle} border`}>
                                E-mail
                            </h3>
                            <p className={`${s.cardContactLink}`}>
                                <a href="">@E-mail</a>
                            </p>
                        </div>
                    </div>
                    <div className={`${s.contactMe} border`}>
                        <form id='contactsForm' className={s.contactsForm}>
                            <input className={s.input} type="text" placeholder='Name'/>
                            <input className={s.input} type="text" placeholder='E-mail'/>
                            <textarea className={s.text} name="" id="" cols="30" rows="10" placeholder='Your message'/>
                        </form>
                        <button>
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};