import React from 'react';
import classes from './modal.module.css';
const Modal = () => {
    return (
        <div className={classes.modal}>
            <div className={classes.modalTitle}>Вход</div>
            <div className={classes.textBar}>Логин</div>
            <input
                type="text"
                className={classes.input}
            />
            <div className={classes.textBar}>Пароль</div>
            <input
                className={classes.input}
                type="text"
            />
            <div className={classes.checkboxContainer}>
                <input
                    type="checkbox"
                />
                <span>Запомнить меня</span>
            </div>
            <div className={classes.bottomContainer}>
                <button className={classes.buttonOne}>Войти</button>
                <div className={classes.span}>Забыли пароль?</div>
                <button className={classes.buttonTwo}>Зарегистрировать Аккаунт</button>
            </div>
        </div>
    );
};

export default Modal;