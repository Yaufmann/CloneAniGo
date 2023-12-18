import React, {useState} from 'react';
import classes from "./modal.module.css";

const FormModal = ({title,handlerAuth}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handlerClick = () => {
        handlerAuth(email,password)
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <div className={classes.textBar}>Логин</div>
            <input
                type="text"
                className={classes.input}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <div className={classes.textBar}>Пароль</div>
            <input
                type="password"
                className={classes.input}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <div className={classes.checkboxContainer}>
                <input
                    type="checkbox"
                />
                <span>Запомнить меня</span>
            </div>
            <div className={classes.flex}>
                <button
                    className={classes.buttonOne}
                    onClick={handlerClick}
                >{title}</button>
            </div>
        </>
    );
};

export default FormModal;