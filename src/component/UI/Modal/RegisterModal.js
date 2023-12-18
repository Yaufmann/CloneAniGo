import React from 'react';
import classes from "./modal.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {AUTH_ROUTER, HOME_ROUTER} from "../../../utils/constant";
import FormModal from "./FormModal";
import {useDispatch} from "react-redux";
import {addUser} from "../../../store/firstSlice";

const RegisterModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerRegister = (email,password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
            .then(({user})=> {
                console.log(user)
                dispatch(addUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate(AUTH_ROUTER)
            })
            .catch(console.error)
    }

    return (
        <div className={classes.modal}>
            <div className={classes.modalTitle}>Регистрация</div>
            <FormModal
               title="Создать"
               handlerAuth={handlerRegister}
            />
            <div className={classes.bottomContainer}>
                <div className={classes.span}>Забыли пароль?</div>
                <button
                    className={classes.buttonTwo}
                    onClick={()=>navigate(AUTH_ROUTER)}
                >Войти в Аккаунт</button>
            </div>
        </div>
    );
};

export default RegisterModal;