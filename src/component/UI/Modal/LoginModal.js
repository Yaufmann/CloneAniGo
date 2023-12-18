import React from 'react';
import classes from './modal.module.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTER, REGISTER_ROUTER} from "../../../utils/constant";
import FormModal from "./FormModal";
import {useDispatch} from "react-redux";
import {addUser, Auth} from "../../../store/firstSlice";
const LoginModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerLogin = (email,password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
            .then(({user})=> {
                console.log(user)
                dispatch(addUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate(HOME_ROUTER)
                dispatch(Auth())
            })
            .catch(()=> alert("Неправильные данные"))
    }
    return (
        <div className={classes.modal}>
            <div className={classes.modalTitle}>Вход</div>
            <FormModal
                title="Войти"
                handlerAuth={handlerLogin}
            />
            <div className={classes.bottomContainer}>
                <div className={classes.span}>Забыли пароль?</div>
                <button
                    className={classes.buttonTwo}
                    onClick={()=>navigate(REGISTER_ROUTER)}
                >Зарегистрировать Аккаунт</button>
            </div>
        </div>
    );
};

export default LoginModal;